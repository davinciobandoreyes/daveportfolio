import type { Benchmark, BenchmarkMark } from "@/lib/types";

const MARK_LABEL: Record<BenchmarkMark, string> = {
  strong: "Strong",
  partial: "Partial",
  none: "—",
};

export function BenchmarkTable({ benchmark }: { benchmark: Benchmark }) {
  return (
    <div className="benchmark">
      <p>{benchmark.lead}</p>
      <div className="benchmark-scroll">
        <table className="benchmark-table">
          <caption className="sr-only">
            Competitive benchmark by product and criterion
          </caption>
          <thead>
            <tr>
              <th scope="col">Product</th>
              {benchmark.criteria.map((criterion) => (
                <th key={criterion} scope="col">
                  {criterion}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {benchmark.rows.map((row) => (
              <tr
                key={row.name}
                className={row.highlight ? "is-highlight" : undefined}
              >
                <th scope="row">{row.name}</th>
                {row.marks.map((mark, index) => (
                  <td
                    key={`${row.name}-${benchmark.criteria[index] ?? index}`}
                    className={`benchmark-mark is-${mark}`}
                  >
                    {MARK_LABEL[mark]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
