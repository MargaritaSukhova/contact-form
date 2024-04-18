import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/operations";
import { FormStyled, InputStyled, ButtonStyled } from "./Form.styled";

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
			// toast.success("Registration successful");
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<FormStyled onSubmit={handleSubmit(onSubmit)}>
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
			<InputStyled
				type="text"
				name="message"
				placeholder="Your message*"
				{...register("message", {
					required: "Please fill the message field",
				})}
			></InputStyled>
			{errors.message && <p>{errors.message.message}</p>}
			<ButtonStyled type="submit">Send message</ButtonStyled>
		</FormStyled>
	);
}
