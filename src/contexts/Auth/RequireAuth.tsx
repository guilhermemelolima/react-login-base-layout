import { useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export const RequireAuth = ({children}: {children: JSX.Element}) => {

	const auth = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!auth.userDTO) {
			navigate("/login");
		}
	}, [auth.userDTO, navigate]);

	if (!auth.userDTO) {
		return ;
	}

	return children;
}
