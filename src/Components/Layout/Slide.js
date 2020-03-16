import React, {Component} from 'react';
import './Layout.css';
import {Switch,Link,Route,BrowserRouter as Router} from 'react-router-dom';
import Meera from '../Hostels/Meera';

class Slide extends Component{
	
	render(){
		return(
			<Router>
				<center>
				<div class="bd-example">
			  <div id="carouselExampleCaptions" class="carousel slide w-50" data-ride="carousel">
				    <ol class="carousel-indicators">
				      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
				      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
				      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
				      <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
				      <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
				      <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
				      <li data-target="#carouselExampleCaptions" data-slide-to="6"></li>
				      <li data-target="#carouselExampleCaptions" data-slide-to="7"></li>
				      <li data-target="#carouselExampleCaptions" data-slide-to="8"></li>
				    </ol>
			    <div class="carousel-inner ">
				      <div class="carousel-item active">
				       <Link to="/meera" >
				        <img src="https://www.bits-pilani.ac.in/Uploads/Hyderabad/adminforbitshyderabad/Gallery/2019-10-22--11-36-35-997_10.Meera_Bhawan.jpg" class="d-block ht w-100" />
				        </Link> 
				        <div class="carousel-caption d-none d-md-block">
				          <h5 >Meera Bhawan</h5>		         
				        </div>
				      </div>
				      <div class="carousel-item">		      
				        <img src="https://www.bits-pilani.ac.in/Uploads/Hyderabad/adminforbitshyderabad/Gallery/2019-10-22--11-27-2-696_2._Vyas_Bhavan.jpg" class="d-block ht w-100" alt="..."/>
				        <div class="carousel-caption d-none d-md-block">
				          <h5>Vyas Bhavan</h5>
				        </div>
				      </div>
				      <div class="carousel-item">
				        <img src="https://www.bits-pilani.ac.in/Uploads/Hyderabad/adminforbitshyderabad/Gallery/2019-10-22--11-35-35-79_7._Gautam_Bhavan.jpg" class="d-block ht w-100" alt="..."/>
				        <div class="carousel-caption d-none d-md-block">
				          <h5>Gautam Bhavan</h5>		         
				        </div>
				      </div>
				      <div class="carousel-item">
				        <img src="https://www.bits-pilani.ac.in/Uploads/Hyderabad/adminforbitshyderabad/Gallery/2019-10-22--11-27-22-711_3._Gandhi_Bhavan.jpg" class="d-block ht w-100" alt="..."/>
				        <div class="carousel-caption d-none d-md-block">
				          <h5>Gandhi Bhavan</h5>		  
				        </div>
				      </div>
				      <div class="carousel-item">
				        <img src="https://www.bits-pilani.ac.in/Uploads/Hyderabad/adminforbitshyderabad/Gallery/2019-10-22--11-35-10-369_4._Shankar_Bhavan.jpg" class="d-block ht w-100" alt="..."/>
				        <div class="carousel-caption d-none d-md-block">
				          <h5>Shankar Bhavan</h5>		  
				        </div>
				      </div>
				      <div class="carousel-item">
				        <img src="https://www.bits-pilani.ac.in/Uploads/Hyderabad/adminforbitshyderabad/Gallery/2019-10-22--11-35-57-590_8._Krishna_Bhawan.jpg" class="d-block ht w-100" alt="..."/>
				        <div class="carousel-caption d-none d-md-block">
				          <h5>Krishna Bhavan</h5>		  
				        </div>
				      </div>
				      <div class="carousel-item">
				        <img src="https://www.bits-pilani.ac.in/Uploads/Hyderabad/adminforbitshyderabad/Gallery/2019-10-22--11-36-17-729_9._Valmiki_Bhavan.jpg" class="d-block ht w-100" alt="..."/>
				        <div class="carousel-caption d-none d-md-block">
				          <h5>Valmiki Bhavan</h5>		  
				        </div>
				      </div>
				       <div class="carousel-item">
				        <img src="https://www.bits-pilani.ac.in/Uploads/Hyderabad/adminforbitshyderabad/Gallery/2019-10-22--11-36-59-288_11.Malaviya_Bhawan.jpg" class="d-block ht w-100" alt="..."/>
				        <div class="carousel-caption d-none d-md-block">
				          <h5>Malaviya Bhavan</h5>		  
				        </div>
				      </div>
				       <div class="carousel-item">
				        <img src="https://www.bits-pilani.ac.in/Uploads/Hyderabad/adminforbitshyderabad/Gallery/2019-10-22--11-26-44-787_1._Vishwakarma.jpg" class="d-block ht w-100" alt="..."/>
				        <div class="carousel-caption d-none d-md-block">
				          <h5>Vishwakarma Bhavan</h5>		  
				        </div>
				      </div>
				    
			    </div>
			    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
			      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
			      <span class="sr-only">Previous</span>
			    </a>
			    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
			      <span class="carousel-control-next-icon" aria-hidden="true"></span>
			      <span class="sr-only">Next</span>
			    </a>
			  </div>
			  	<Switch>
						<Route path="/meera" exact component={Meera}/>			  	
				</Switch>
			</div>
		</center>		
	</Router>
		);
	}
}

export default Slide;