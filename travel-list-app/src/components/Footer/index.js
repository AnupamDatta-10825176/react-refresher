import "./Footer.css";

const Footer = ({ items }) => {
  const totalItems = items.length;
  const itemPacked = items.filter((item) => item.packed).length;
  const completion = Math.ceil((itemPacked / totalItems) * 100);

  return (
    <footer className="footer">
      {completion === 100 ? (
        <span>
          <em>Great Job 👌!!! All packed, happy Journey.✈️</em>
        </span>
      ) : (
        <span>
          <em>
            💼 You have {totalItems} items on your list, and
            <span>
              {completion === 0
                ? " You must start packing them.😮"
                : ` you already packed ${itemPacked} items (${
                    isNaN(completion) ? 0 : completion
                  })%.`}
            </span>
          </em>
        </span>
      )}
    </footer>
  );
};

export default Footer;
