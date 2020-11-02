import React, {useEffect, useState} from 'react';
import * as QueryString from 'query-string';
import './paymentSuccess.css';

function OrderDetailRow({key,value}){
    return (
        <div className={"detail_row row"}>
            <div className={"detail_key"}>{key}&nbsp;:</div>
            <div className={"detail_value"}>{value}</div>
        </div>
    );
}
export default function PaymentSuccess(props) {
    const [fetchCompleted,setFetchCompleted] = useState(false);
    const [response,setResponse] = useState({});
    const sessionId= QueryString.parse(props.location.search)['session_id'];

    useEffect(()=> {
        //fetch(`/test`)
        fetch(`https://fashion-city-server.herokuapp.com/payment_success?session_id=${sessionId}`)
            .then(res=> res.json())
            .then(response=> {
                setFetchCompleted(true);
                setResponse(response);
            }).catch(error=>{
            console.log(error);
        });

    });
    return (
        <section className={'center column'} style={{color:"white"}}>
            {
                fetchCompleted ?
                    <>
                        <h1 className={"heading"}>Thanks for your order...!!!</h1>
                        <div className={"divider"}/>
                        <div className={"order_detail"}>
                            <h1>Order Details</h1>
                            <OrderDetailRow key={"Name"} value={response.name}/>
                            <OrderDetailRow key={"Email"} value={response.email}/>
                            <div className={"detail_row row"}>
                                <div className={"detail_key"}>Shipping Address : </div>
                                <div className={"detail_value"}>
                                    <p>
                                        {response.line1}
                                        <br/>
                                        {response.line2}
                                        <br/>
                                        {response.city}
                                        <br/>
                                        {response.state}
                                        <br/>
                                        {response.postal_code}
                                        <br/>
                                    </p>
                                </div>
                            </div>
                            <OrderDetailRow key={"Total Amount Paid"} value={response.amount_total}/>
                        </div>
                        <div className={"divider"} />
                        <h5>
                            We appreciate your business!
                            If you have any questions, please email <a href="mailto:pushpendraupadhyay6452@gmail.com">pushpendraupadhyay6452@gmail.com</a>
                        </h5>
                    </>
                    :
                    <h1>Loading data....</h1>
            }
        </section>
    );
}