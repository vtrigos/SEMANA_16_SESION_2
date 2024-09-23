import './Card.css';

export const Card = ({ plan, price, revision, time, nroPages }) => {

    const statusPlan = plan.toLowerCase() === 'standard';
console.log(statusPlan);
    return (
        <div className={`card ${statusPlan ? 'standard' : ''}`}>
            <div className={`priceCircle ${statusPlan ? 'standard' : ''}`}>{price}</div>
            <div className="content">
                <h2>{plan}</h2>
                <div className="data">
                    <p>Data source</p>
                    <p>Responsive design</p>
                    <p>Personal License</p>
                    <p>{revision} Revisions</p>
                    <p>Estimated time is {time} days</p>
                    <p>Max {nroPages} pages</p>
                </div>
                <button className={`${statusPlan ? 'standard' : ''}`}>Buy Now</button>
            </div>
        </div>
    )
}