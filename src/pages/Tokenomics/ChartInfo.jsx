export default function ChartInfo({ title, description }) {
  return (
    <div className="chart-info-single">
      <div className="chart-info-single__circle"></div>
      <div className="chart-info-single__content">
        <p>
          <b> {title}: </b> {description}
        </p>
      </div>
    </div>
  );
}
