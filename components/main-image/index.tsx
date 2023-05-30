import './index.css';

export const MainImage = () => {
  return (
    <div className='main-image image-fluid position-relative'>
      <div className='position-absolute top-50 text-center' style={{left:'50%',transform: 'translate(-50%, -50%)'}}>

      <b className='main-heading text-white'>Il tuo accesso al sole</b>
      <br/>

      <span className=' text-white sub-heading-3'>Sistemi fotovoltaici intelligenti ad uso residenziale, anche in assenza di tetto. La tua fonte d'energia, gratuita e sostenibile</span>
     
      </div>
    </div>
  )
}
