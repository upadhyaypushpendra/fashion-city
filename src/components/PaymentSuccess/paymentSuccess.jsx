import React from 'react';
import * as QueryString from 'query-string';
import './paymentSuccess.css';

class PaymentSuccess extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchCompleted:false,
            response: {}
        };
        this.sessionId = "";
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() {
        //fetch(`/test`)
        fetch(`https://fashion-city-server.herokuapp.com/payment_success?session_id=${this.sessionId}`)
            .then(res=> res.json())
            .then(response=> {
                this.setState({fetchCompleted:true,response:response});
            }).catch(error=>{
            console.log(error);
        });

    }
    render() {
        this.sessionId= QueryString.parse(this.props.location.search)['session_id'];
        return (
            <section className={'center column'} style={{color:"white"}}>
                {
                    this.state.fetchCompleted ?
                        <>
                            <h1 className={"heading"}>Thanks for your order...!!!</h1>
                            <div className={"divider"}/>
                            <div className={"order_detail"}>
                                <h1>Order Details</h1>
                                <div className={"detail_row row"}>
                                    <div className={"detail_key"}>Name :</div>
                                    <div className={"detail_value"}>{this.state.response.name}</div>
                                </div>
                                <div className={"detail_row row"}>
                                    <div className={"detail_key"}>Email :</div>
                                    <div className={"detail_value"}>{this.state.response.email}</div>
                                </div>
                                <div className={"detail_row row"}>
                                    <div className={"detail_key"}>Shipping Address : </div>
                                    <div className={"detail_value"}>
                                        <p>
                                            {this.state.response.line1}
                                            <br/>
                                            {this.state.response.line2}
                                            <br/>
                                            {this.state.response.city}
                                            <br/>
                                            {this.state.response.state}
                                            <br/>
                                            {this.state.response.postal_code}
                                            <br/>
                                        </p>
                                    </div>
                                </div>
                                <div className={"detail_row row"}>
                                    <div className={"detail_key"}>Total Amount Paid :</div>
                                    <div className={"detail_value"}>&#8377; {this.state.response.amount_total}</div>
                                </div>
                            </div>
                            <div className={"divider"} />
                            <h5>
                                We appreciate your business!
                                If you have any questions, please email <a href="mailto:pushpendraupadhyay6452@gmail.com">pushpendraupadhyay6452@gmail.com</a>
                            </h5>
                        </>
                        :
                        <h1>Loading....</h1>
                }
            </section>
        );
    }
}

export default  PaymentSuccess;
