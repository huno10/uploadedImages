import styles from './Items.module.css'
import { TiCameraOutline } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import { DownloadImege } from './DownloadImege/DownloadImege';
import { useState } from 'react';
import { SaveImage } from './SaveImage/SaveImage';

export const Items = ({ item }) => {
    const navigate = useNavigate();
    const [uploadedImage, setUploadedImage] = useState(null);

    const goBack = () => navigate('/');

    return (
        <div className={styles.container}>
            {uploadedImage ?
                <SaveImage uploadedImage={uploadedImage} id={item.id} />
                :
                <div className={styles.uploaded_wrapper}>
                    <button className={styles.btn} onClick={goBack}>{`< Go back`}</button>
                    <div className={styles.wrapper_img}>
                        <img className={styles.img} src={item.img} alt="photo" />
                    </div>
                    <div className={styles.btns_block}>
                        <DownloadImege setUploadedImage={setUploadedImage} />
                        <div className={styles.btn_wrapper}>
                            <TiCameraOutline className={styles.icon}
                                style={{
                                    background: 'transparent',
                                    color: 'white',
                                }}
                            />
                            <p className={styles.descr}>Take photo with camera</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
