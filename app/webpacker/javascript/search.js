import * as $ from 'jquery';
import {format, parse} from 'date-fns';
/*
$(document).on('turbolinks:load', () => {
	$('#search-form').on('submit', (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		$.ajax({
			url: '/rideshares',
			data: formData,
			processData: false,
			dataType: 'json',
			type: 'GET',
			success: (rideshares) => {
				$('.carousel-inner').html();
				console.log(rideshares)
				rideshares.forEach((rideshare, index) => {
					$('.carousel-inner').append(
						`<div class="carousel-item ${index === 0 ? 'active' : ''} container">
							<div class="container">
								<div class="row">
									<div class="col-2 user-picture">
										<img class="img-fluid" src="http://i.imgur.com/EW5FgJM.png" alt="Carousel 1">
									</div>
									<div class="col-3 user-name align-self-center">
										
									</div>
									<div class="col-2 offset-4 rs-c-d align-self-center">
										Ride-Date
									</div>
								</div>
								<div class="row card-info text-center justify-content-between">
									<div class="col">
										<p>Start-Time</p>
										<p>Pickup-location</p>
										<p>Parish</p>
									</div>
									<div class="col">
										<p>Travel-time</p>
										<p>Distance</p>
									</div>
									<div class="col">
										<p>Arrival-time</p>
										<p>Park-Location</p>
										<p>Parish</p>
									</div>
								</div>
								<div class="row bg-gray">
									<div class="col-2 offset-10">
										<button>Join Ride</button>
									</div>
								</div>
							</div>
						</div>
					);
				});
			}
		})
	})
});
 */