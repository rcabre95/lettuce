import { useForm } from "react-hook-form"
import { useEffect, useState } from "react";
import ActionButton from "../shared-ui/ActionButton";

export default function Reservation() {
    const [formStep, setFormStep] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitHandler = async (formData: any) => {
        console.log(formData)
        // make async call to table data api and add reservation
        // if it fails, alert user to try again (later?)
        // if it succeeds show success message
        // we will assume success for this example
        setFormStep(formStep + 1);
    }

    const tableFinder = async () => {
        
        // make async call to table data api
        // return available tables
        // if no tables are available for the selected settings, alert user
        // assume available tables
        setFormStep(formStep + 1)
    }

    const times: Array<number> = [11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23]

    useEffect(() => {
        console.log(errors)
    }, [])

    return (
        <section className="flex flex-col h-fit transition-transform duration-100 justify-center items-center border-t border-b w-11/12 border-black mx-4 py-2">
            <h3 className="text-lg">MAKE A RESERVATION</h3>
            <form className={`${formStep < 2 ? "block" : "hidden"} font-montserrat`} onSubmit={handleSubmit(submitHandler)}>
                <div className={`${formStep < 1 ? "flex" : "hidden"} flex-col mb-2`}>
                    <label className="hidden" htmlFor="resDate">Reservation Date</label>
                    <input className={`w-56 h-10 border text-center`} id="resDate" type="date" {...register("date", {
                        required: true,
                        valueAsDate: true,
                    })} />
                    
                    <label className="hidden" htmlFor="resTime">Reservation Time</label>
                    <select id="resTime" className={`w-56 h-10 border text-center`} {...register("time", {
                        required: true,
                    })}>
                        {times.map((time, index) => {

                            return (
                                <option key={`${time}${index}`}value={`${time}:${index % 2 == 0 ? "00" : "30"}`}>
                                    {`${time > 12 ? time - 12 : time}:${index % 2 == 0 ? "00" : "30"}`}
                                </option>
                            )
                        })}
                    </select>

                    <label className="hidden" htmlFor="numGuests">Number of Guests</label>
                    <select id="numGuests" className={`w-56 h-10 border text-center`} {...register("guests", {
                        required: true,
                    })}>
                        {[...Array(8).keys()].map(item => {
                            return (
                                <option key={item} value={item+1}>{item+1 >= 8 ? "8+" : item+1}</option>
                            )
                        })}
                    </select>
                    <ActionButton type="button" text="Find a table" action={tableFinder} />
                </div>

                <div className={`${formStep === 1 ? "flex" : "hidden"} flex-col mb-2`}>
                    <label htmlFor="nameInput" className="hidden"></label>
                    <input className={`w-56 h-10 border text-center`} placeholder="Name" id="nameInput" type="text" {...register("name", {
                        required: "Please enter your name",
                        minLength: {
                            value: 2,
                            message: "Please enter your name"
                        }
                    })} />

                    <label htmlFor="phoneInput" className="hidden"></label>
                    <input className={`w-56 h-10 border text-center`} placeholder="Phone Number" id="phoneInput" type="text" {...register("phone", {
                        required: true,
                        minLength: {
                            value: 10,
                            message: "Please enter a valid phone number. ex. 555 555 5555"
                        }
                    })} />

                    <label htmlFor="emailInput" className="hidden"></label>
                    <input className={`w-56 h-10 border text-center`} placeholder="Email Address" id="emailInput" type="email" {...register("email", {
                        required: "Please enter your email",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "You must provide a valid email address."
                        }
                    })} />
                    <ActionButton type="submit" text="Reserve my table" />
                </div>
            </form>
            <div className={`${formStep < 2 ? "hidden" : "block"}`}>
                Success!
            </div>
        </section>
    )
}