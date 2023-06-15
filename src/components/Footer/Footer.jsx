import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <MDBFooter className='custom-footer text-white text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Vi-Da Guest Resort</h5>
            <p>
              Lorem Lorem sinta
              Buko ng papaya
              Dala-dala'y buslo
              Sisidlan ng sinta
              Pagdating sa dulo'y
              Nabali ang sanga
              Kapos kapalaran
              Humanap ng iba
              Gumising ka Neneng
              Tayo'y manampalok
              Dalhin mo ang buslo
              Sisidlan ng hinog
              Pagdating sa dulo'y
              Lalamba-lambayog
              Kumapit ka Neneng
              Baka ka mahulog
            </p>
          </MDBCol>

          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Links</h5>
            <ul className='list-unstyled mb-0'>
              <li>
                <Link to='/' className='text-white'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/about/:id' className='text-white'>
                  About
                </Link>
              </li>
              <li>
                <Link to='/service/:id' className='text-white'>
                  Services
                </Link>
              </li>
              <li>
                <Link to='/contact/:id' className='text-white'>
                  Contact
                </Link>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>

        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#3b5998' }}
          href='https://www.facebook.com/profile.php?id=100063648115816'
          tag='a'
          role='button'
          target='_blank'
        >
          <MDBIcon fab icon='facebook-f' />
        </MDBBtn>

        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#55acee' }}
          to='#!'
          tag={Link}
          role='button'
        >
          <MDBIcon fab icon='twitter' />
        </MDBBtn>

        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#dd4b39' }}
          to='#!'
          tag={Link}
          role='button'
        >
          <MDBIcon fab icon='google' />
        </MDBBtn>
        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#ac2bac' }}
          to='#!'
          tag={Link}
          role='button'
        >
          <MDBIcon fab icon='instagram' />
        </MDBBtn>

        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#0082ca' }}
          to='#!'
          tag={Link}
          role='button'
        >
          <MDBIcon fab icon='linkedin-in' />
        </MDBBtn>

        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#333333' }}
          href='https://github.com/maloya02'
          tag='a'
          role='button'
          target='_blank'
        >
          <MDBIcon fab icon='github' />
        </MDBBtn>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} GitHub: {' '}
        <a className='text-white' href='https://github.com/maloya02' target='_blank' rel='noopener noreferrer'>
          github.com/maloya02
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
