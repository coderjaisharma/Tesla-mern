import React from 'react'
import './Item.css'
import Button from './Button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
const Item = (props) => {
    return (
        <div className="item" style={{backgroundImage:`url(${props.imgsrc})`}} >
            <div className="item__container" >
            
                <div className="item__text">
                    <p>{props.title}</p>
                    </div>
                    <div className="item__textDesc">
                        <p>{props.desc}</p>
                   
                </div>
                <div className="item__lowerThird">
                    <div className="item__buttons">
                          <Button imp="primary" text={props.leftBtnTxt} link={props.leftBtnLink} />
                          {props.twoButtons && (<Button imp="secondary" text={props.rightBtnTxt} link={props.rightBtnLink}/>)}
                          </div>
                    {props.first &&(<div className="item__expand">
                    <ExpandMoreIcon/>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default Item
