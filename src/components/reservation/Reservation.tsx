import { useForm } from "react-hook-form"
import { useState } from "react";

export default function Reservation() {
    const [formStep, setFormStep] = useState<number>(0);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitHandler = async () => {

    }

    const tableFinder = async () => {
        // make async call to table data api
        // return available tables
        //if no tables are available for the selected settings, alert user
    }

    const times: Array<number> = [11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23]

    return (
        <section>
            <form onSubmit={tableFinder}>
                <h3>MAKE A RESERVATION</h3>
                {/* <label htmlFor="resDate">Reservation Date</label> */}
                <input id="resDate" type="date" {...register("date", {
                    required: true,
                    valueAsDate: true,
                })} />

                <select {...register("time", {
                    required: true,
                })}>
                    {times.map((time, index) => {

                        return (
                            <option value={`${time}:${index % 2 == 0 ? "00" : "30"}`}>
                                {`${time > 12 ? time - 12 : time}:${index % 2 == 0 ? "00" : "30"}`}
                            </option>
                        )
                    })}
                </select>

                <select id="">
                    {[...Array(8).keys()].map(key => {
                        return (
                            <option value={key+1}>{key+1 >= 8 ? "8+" : key+1}</option>
                        )
                    })}
                </select>
                <button type="submit">Find a Table</button>
            </form>
        </section>
    )
}