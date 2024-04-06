import Card from "../global/card";

export default function SuccessPath({ data }) {
  return (
    <div className="balance-section success-path-section">
      <h2 data-option="up" className="section-heading animate-hidden animate">
        {data.heading1}
      </h2>
      <div className="success-path-container">
        {data.cards1.map((item, index) => {
          return (
            <div
              data-option="up"
              key={index}
              className="success-path-column animate-hidden animate">
              <div className="succes-path-num">{item.number}</div>
              <div className="success-path-content-column">
                <h2 className="success-path-heading">{item.heading}</h2>
                <p className="section-content">{item.content}</p>
                <p className="success-path-percentage">{item.percentage}</p>
                <p className="success-path-content-highlight section-content">
                  {item.highlight}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <h2
        data-option="up"
        className="success-path-category-main-heading sub-heading animate-hidden animate">
        {data.heading2}
      </h2>
      <div className="success-path-category-container">
        {data.cards2.map((item, index) => {
          return (
            <Card
              key={index}
              image={item.image}
              title={item.title}
              content={item.content}
            />
          );
        })}
      </div>
    </div>
  );
}
