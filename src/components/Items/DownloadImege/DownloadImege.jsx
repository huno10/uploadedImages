import styles from './DownloadImege.module.css'
import { AiOutlinePicture } from "react-icons/ai";

export const DownloadImege = ({setUploadedImage}) => {

    const handleFileChange = (event) => {
        const file = event.target.files[0]; 
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setUploadedImage(imageUrl);
        }
    };

    return (
        <div>
            <div className={styles.btn_wrapper}>
                <input
                    type="file"
                    accept="image/*" 
                    onChange={handleFileChange}
                    style={{ display: 'none' }} 
                    id="file-upload" 
                />
                <label htmlFor="file-upload" style={{ cursor: 'pointer' }}>
                    <AiOutlinePicture className={styles.icon}
                        style={{
                            background: 'transparent',
                            color: 'white',
                        }}
                    />
                    <p className={styles.descr}>Choose photo from gallery</p>
                </label>
            </div>
        </div>
    )
}
