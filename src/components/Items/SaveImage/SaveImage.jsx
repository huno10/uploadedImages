import { useDispatch } from 'react-redux'
import styles from './SaveImage.module.css'
import { updatePerson } from '../../../store/Store'
import { useNavigate } from 'react-router-dom'

export const SaveImage = ({ uploadedImage, id }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleSaveImage = () => {
        dispatch(updatePerson({ id, updates: { img: uploadedImage } }));
        navigate('/');
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper_img_uploaded}>
                <img className={styles.img_uploaded} src={uploadedImage} alt="photo" />
            </div>
            <div className={styles.btn_wrapper}>
                <button className={styles.btn_save} onClick={handleSaveImage}>Save</button>
                <button className={styles.btn_morePics}>More pics</button>
            </div>
        </div>
    )
}
