import React, { useEffect, useRef } from 'react';
import styles from './ModalFooter.module.css';
import { useMediaQuery } from 'react-responsive';
import Logo from 'components/common/Logo/Logo';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import FormButton from 'components/common/FormButton/FormButton';
import 'animate.css';

// Corectarea importului imaginii
import catalin from '../../../src/images/members-pictures/catalin.webp';

const ModalFooter = ({ closeModal }) => {
  const modalRef = useRef();

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const addCloseEvent = (event) => {
      if (event.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', addCloseEvent);

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', addCloseEvent);
    };
  });

  const closeOnClickOutside = (event) => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  const screenCondition = useMediaQuery({ query: '(min-width: 768px)' });

  const animation = 'animate__animated animate__fadeInDown animate__slow';

  return (
    <div className={styles.modalFooter} onClick={closeOnClickOutside} ref={modalRef}>
      <div className={styles.modalBg}>
        <div className={styles.modalContent}>
          {screenCondition && <Logo variant={'formLogo'} />}
          <h2>Creat de:</h2>

          <div className={styles.footerCards}>
            {/* Card pentru Catalin */}
            <div className={`${styles.footerTeamCard} ${animation}`}>
              <img
                src={catalin} // Folosește variabila corectă pentru imagine
                alt="Catalin"
                className={styles.teamMemberImage}
              />
              <span className={styles.footerTeamName}>Catalin Negoita</span>
              <em className={styles.footerTeamFunction}>Scrum Master</em>
              <div className={styles.socialLinks}>
                <a href="https://github.com" className={styles.footerGithubIcon} aria-label="GitHub profile" target="_blank" rel="noreferrer noopener">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/" className={styles.footerLinkedinIcon} aria-label="LinkedIn profile" target="_blank" rel="noreferrer noopener">
                  <FaLinkedin />
                </a>
              </div>
            </div>

            {/* Adaugă alte carduri pentru membrii echipei dacă este necesar */}
          </div>

          <FormButton
            type={'button'}
            text={'Thank You'}
            variant={'whiteButtton'}
            handlerFunction={() => closeModal()}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalFooter;
