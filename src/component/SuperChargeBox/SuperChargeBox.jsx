import './SuperChargeBox.css'


const SuperChargeBox = (props) => {
    return (
        <div className="box-2">
            <div className="img-box">
                <img src={props.SrcImg} alt={props.AltImage} />
            </div>
            <h3>{props.BoxTitle}</h3>
            <p>{props.BoxContent}</p>
        </div>
    )
}

export default SuperChargeBox