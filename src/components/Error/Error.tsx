import s from './Error.module.scss'
type Props = {}

export const Error = ({}: Props) => {
    return (
        <div className={s.errorContainer}>
            <h1>Error</h1>
        </div>
    );
};

