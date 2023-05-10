import {useField} from "formik";

const MyTextarea = ({label, ...props}) => {
	// @ts-ignore
	const [field, meta] = useField(props);
	return (
		<div>
			<label
				htmlFor="message"
				className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
			>
				{label}
			</label>
			<textarea
				id="message"
				rows={4}
				className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="Write your thoughts here..."
				{...field}
				{...props}
			></textarea>
			{meta.touched && meta.error ? (
				<div className="text-sm text-red-500">{meta.error}</div>
			) : null}
		</div>
	);
};

export default MyTextarea;
