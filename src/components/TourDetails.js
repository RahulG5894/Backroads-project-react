const TourDetails = ({img, date, title, desc, icon, day, price, country}) => {
    return (
        <article className="tour-card">
            <div className="tour-img-container">
                <img src={img} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
                <div className="tour-title">
                    <h4>{title}</h4>
                </div>
                <p>{desc}</p>
                <div className="tour-footer">
                    <p>
                        <span><i className={icon}></i></span> {country}
                    </p>
                    <p>{day} days</p>
                    <p>from ${price}</p>
                </div>
            </div>
        </article>
    )
}

export default TourDetails
