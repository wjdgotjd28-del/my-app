import React from "react";

const styles ={

    wrapper: {
        margin:8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: " 1px solid grey",
        borderRadius: 16,
    },
    messagetext: {
        color: "black",
        fontSize: 16,
    },
};

class Notification extends React.Component {
    constructor(props){
        super(props);

        this.state ={};
    }

    componentDidMount() {
        console.log(`${this.props.id} componentDidMount() callde.`)
    }

    componentDidUpdate() {
        console.log(`${this.props.id} componentDidUpdate() callde.`)
    }

    componentWillUnmount() {
        console.log(`${this.props.id} componentWillUnmount() callde.`)
    }

    render() {
        return(
            <div style={styles.wrapper}>
                <span style={styles.messagetext}>
                    {this.props.message}
                </span>
            </div>
        );
    }
}

export default Notification;