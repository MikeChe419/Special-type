import { GoBackButton } from "../../components/GoBackButton/GoBackButton";
import PayForm from "../../components/PayForm/PayForm";
import "./Payment.sass";

const Payment = () => {
    return (

        <section className="payment">
            <GoBackButton label="Как помочь/Сделать пожертвование" />
            <PayForm />
        </section>
    )
}

export default Payment