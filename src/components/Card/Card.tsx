import { FC } from "react";

const Card: FC = () => {

  return (
    <>
    
    <div className="col-12 col-md-4">
      <div className="card">
        <div className="card-header">Downward Dow ... 30 seconds</div>
        <img src="..." className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">Settle in to downward dog.</h5>
        </div>
        <div className="card">
          <p className="card-text">Notes</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">breath</li>
            <li className="list-group-item">relax</li>
            <li className="list-group-item">flexibility getting better</li>
          </ul>
        </div>
        <a href="#" className="btn btn-primary">Edit</a>
      </div>
      <div className="card">
        <div className="card-header">Two</div>
        <img src="..." className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">Baby Pose</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div className="card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
        </div>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    </>
    
  );
}

export default Card;