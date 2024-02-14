import './FeatureNavContent.css'


import Buttons from '../../component/Buttons/Buttons'

const FeatureNavContent = (props) => {
    return (
        <>
            {props.data.isActive &&
                <div className="tab-pane">
                    <div className="tab-body tab-body-1">
                        <div className="tab-body-left">
                            <h3>{props.data.title}</h3>
                            <p>{props.data.content}</p>
                            <Buttons content='Book a demo' to='/' className="BookADemo" />
                        </div>
                        <div className="tab-body-right">
                            <video autoPlay=" " muted="" loop="" playsInline="">
                                <source src={props.data.video} />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default FeatureNavContent


