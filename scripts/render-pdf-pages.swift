import AppKit
import Foundation
import PDFKit

guard CommandLine.arguments.count >= 3 else {
  fputs("usage: render-pdf-pages.swift <pdf> <outdir>\n", stderr)
  exit(1)
}

let pdfURL = URL(fileURLWithPath: CommandLine.arguments[1])
let outDir = URL(fileURLWithPath: CommandLine.arguments[2], isDirectory: true)

guard let document = PDFDocument(url: pdfURL) else {
  fputs("failed to open pdf\n", stderr)
  exit(1)
}

try FileManager.default.createDirectory(at: outDir, withIntermediateDirectories: true)

let scale: CGFloat = 2
for index in 0 ..< document.pageCount {
  guard let page = document.page(at: index) else { continue }
  let bounds = page.bounds(for: .mediaBox)
  let size = NSSize(width: bounds.width * scale, height: bounds.height * scale)
  let image = NSImage(size: size, flipped: false) { _ in
    guard let context = NSGraphicsContext.current?.cgContext else { return false }
    context.setFillColor(NSColor.white.cgColor)
    context.fill(CGRect(origin: .zero, size: size))
    context.scaleBy(x: scale, y: scale)
    page.draw(with: .mediaBox, to: context)
    return true
  }

  guard
    let tiff = image.tiffRepresentation,
    let rep = NSBitmapImageRep(data: tiff),
    let jpeg = rep.representation(using: .jpeg, properties: [.compressionFactor: 0.86])
  else { continue }

  let dest = outDir.appendingPathComponent(String(format: "page-%02d.jpg", index + 1))
  try jpeg.write(to: dest)
  print(dest.path)
}
