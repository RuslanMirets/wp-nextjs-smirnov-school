import { FcGoogle } from "react-icons/fc";
import styles from "./AuthSocials.module.scss";
import { FaYandex } from "react-icons/fa";
import { signIn } from "next-auth/react";

const AuthSocials = () => {
	return (
		<div className={styles.root}>
			<div className={styles.title}>Войти с помощью</div>
			<ul className={styles.list}>
				<li className={styles.listItem}>
					<button
						className={styles.button}
						type="button"
						onClick={() => signIn("google")}
					>
						<FcGoogle size={30} />
						Google
					</button>
				</li>
				<li className={styles.listItem}>
					<button
						className={styles.button}
						type="button"
						onClick={() => signIn("yandex")}
					>
						<FaYandex size={30} />
						Yandex
					</button>
				</li>
			</ul>
		</div>
	);
};

export default AuthSocials;
