import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { addUser } from "../../redux/operations";
import {
	FormStyled,
	InputStyled,
	MessageInput, ButtonStyled,
} from "./Form.styled";
import Title from "../title/Title";

export default function Form() {
	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		try {
			await dispatch(addUser(data));
			reset();
			toast.success("Message was sent!");
		} catch (error) {
			console.error(error);
			toast.success("Something went wrong, please try again");
		}
	};

	return (
		<FormStyled onSubmit={handleSubmit(onSubmit)}>
			<Title title="Reach out to us!"></Title>
			<InputStyled
				type="text"
				name="name"
				placeholder="Your name*"
				{...register("name", {
					required: "Please fill the name field",
				})}
			></InputStyled>
			{errors.name && <p>{errors.name.message}</p>}
			<InputStyled
				type="email"
				name="email"
				placeholder="Your e-mail*"
				{...register("email", {
					required: "Please fill the email field",
					pattern: {
						value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
						message: "Please fill a valid email",
					},
				})}
			></InputStyled>
			{errors.email && <p>{errors.email.message}</p>}
			<MessageInput
				type="text"
				name="message"
				placeholder="Your message*"
				{...register("message", {
					required: "Please fill the message field",
				})}
			></MessageInput>
			{errors.message && <p>{errors.message.message}</p>}
			<ButtonStyled type="submit">Send message</ButtonStyled>
		</FormStyled>
	);
}
