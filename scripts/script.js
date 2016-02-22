$(function() { // begin document ready

	$(".replay a").on("click", function(){
		location.reload();
	})

	$("div.replay").hide();

	$('a').smoothScroll();

	$(".close").on("click", function(){
		$(".error").fadeOut();
	})

	var moes = 0;
	var kavanaghs = 0;
	var milliways = 0;
	var tenForward = 0;
	var ricks = 0;
	var cantina = 0;
	var cheers = 0;
	var greenDragon = 0;

	var ambience = {
		darkMoody: {
			moes: 3,
			kavanaghs: 2,
			milliways: 0,
			tenForward: 0,
			ricks: 2,
			cantina: 0,
			cheers: 3,
			greenDragon: 0
		},
		flashy: {
			moes: 0,
			kavanaghs: 2,
			milliways: 2,
			tenForward: 2,
			ricks: 0,
			cantina: 3,
			cheers: 0,
			greenDragon: 3
		},
		class: {
			moes: 0,
			kavanaghs: 0,
			milliways: 2,
			tenForward: 2,
			ricks: 2,
			cantina: 0,
			cheers: 0,
			greenDragon: 0
		}
	};

	var drinkType = {
		beers: {
			moes: 3,
			kavanaghs: 3,
			milliways: 0,
			tenForward: 1,
			ricks: 2,
			cantina: 2,
			cheers: 3,
			greenDragon: 3
		},
		cocktails: {
			moes: 1,
			kavanaghs: 2,
			milliways: 2,
			tenForward: 2,
			ricks: 2,
			cantina: 0,
			cheers: 2,
			greenDragon: 0
		},
		newDrink: {
			moes: 0,
			kavanaghs: 0,
			milliways: 3,
			tenForward: 3,
			ricks: 0,
			cantina: 3,
			cheers: 0,
			greenDragon: 2
		}
	};

	var clientType = {
		younger: {
			moes: 0,
			kavanaghs: 0,
			milliways: 1,
			tenForward: 2,
			ricks: 0,
			cantina: 0,
			cheers: 0,
			greenDragon: 2
		},
		business: {
			moes: 3,
			kavanaghs: 3,
			milliways: 2,
			tenForward: 3,
			ricks: 2,
			cantina: 0,
			cheers: 3,
			greenDragon: 0
		},
		rough: {
			moes: 2,
			kavanaghs: 1,
			milliways: 2,
			tenForward: 1,
			ricks: 3, 
			cantina: 3,
			cheers: 0,
			greenDragon: 3
		}
	};

	var eraGenType = {
		classic: {
			moes: 3,
			kavanaghs: 1,
			milliways: 0,
			tenForward: 0,
			ricks: 3,
			cantina: 0,
			cheers: 2,
			greenDragon: 0
		},
		modern: {
			moes: 2,
			kavanaghs: 3,
			milliways: 0,
			tenForward: 1,
			ricks: 0,
			cantina: 0,
			cheers: 2,
			greenDragon: 0
		},
		anotherTime: {
			moes: 0,
			kavanaghs: 0,
			milliways: 3,
			tenForward: 3,
			ricks: 0,
			cantina: 3,
			cheers: 0,
			greenDragon: 3
		}
	}

	var barDetails = {
		moes: {
			name: 'Moe’s Tavern!',
			origin: 'The Simpsons, first seen 1989, “Simpsons Roasting on an Open Fire”',
			drink: 'Flaming Moe',
			img: 'images/Moes.png',
			alt: 'exterior shot of Moe’s Tavern',
			description: 'Moe’s is perhaps the most famous landmark in all of Springfield, offering up sudsy mugs full of Duff beer to resident regulars like Barney Gumble and Homer Simpson. Though known for being a bit of a dive, your pop up can also become a gay bar (Mo’s), a flashy cocktail bar (Flaming Moe’s) and even a family-friendly restaurant where your patrons can eat right off the host’s head (Uncle Moe’s Feed Bag). You’ll have to close on Wednesdays so your bartender can read to the children at a local homeless shelter. Beware of prank phone calls.'
		},
		ricks: {
			name: 'Rick’s Café Américain!',
			origin: 'Casablanca, 1942',
			drink: 'Gin',
			img: 'images/rickscafe.jpg',
			alt: 'Humphrey Bogart standing outside the front door of Rick’s Cafe',
			description: '“Of all the gin joints in all the towns in all the world…” As time goes by, Rick’s continues to be timeless. American expat Rick Blaine’s upscale nightclub and gambling den in, of course, Casablanca, attracts refugees from across war-torn Europe, desperate to escape their troubles. A seedy and sentimental backdrop for love and sacrifice, you and your patrons will agree, this is the start of a beautiful friendship.'
		},
		cantina: {
			name: 'Mos Eisley Cantina!',
			origin: 'Star Wars, 1977',
			img: 'images/moseisley.png',
			alt: 'Han Solo, some aliens and Chewbacca sitting at a bar',
			drink: 'something colourful and nasty',
			description: 'Known as one of the most dangerous, rough and tumble bars in the entire galaxy, the Mos Eisley house band of eclectic jazz musicians only take breaks between murders. While rubbing shoulders with scum and bounty hunters from across the cosmos, warn patrons to not lose an arm like Ponda Baba and to be grateful that Greedo is such a bad shot. Also, remember to tell your customer’s to leave their droids at the door, there’s no room for patrons who won’t drink!'
		},

		kavanaghs: {
			name: 'Kavanagh’s Irish Pub!',
			origin: 'The Wire, first seen 2004, “Dead Soldiers”',
			drink: 'A shot of Jameson’s',
			img: 'images/Kavanaghs.png',
			alt: 'McNulty laying on a pool table surrounded by laughing co-workers in a bar',
			description: 'Known for it’s wakes and retirements, Kavanagh’s is the place for the po-lice to unwind (read: get wasted) after a hard day on the streets. Your patrons might not be able to get a game of pool in due to the laid out officer on the table, but they’ll stay for the speeches and the rousing Irish folk songs. A patio out back with some train tracks will really let people live out their authentic Baltimore Police drinking experience.'
		},

		cheers: {
			name: 'Cheers',
			origin: 'Cheers, first seen 1982, “Give Me a Ring Sometime”',
			img: 'images/cheers.jpg',
			alt: 'Sam Malone behind the bar talking to Norm and Frasier',
			drink: 'Beer in a mug, a Carla cocktail',
			description: 'With Sam Malone and Carla Tortelli behind the bar, this the quintessential idea of what a bar is. With regulars like Norm, Cliff and Dr. Frasier Crane rarely leaving their stools, you can expect a reliable customer base where everyone knows everyone’s names and your bar staff can kind of get away with not doing very much (other than have dramatic encounters in the back room).'
		},

		greenDragon: {
			name: 'The Green Dragon Inn!',
			origin: 'The Hobbit, JRR Tolkien, 1937',
			drink: 'A half-pint of (brown) ale',
			img: 'images/greendragoninn.jpg',
			alt: 'Four hobbits sitting at a table clinking half-pints of ale',
			description: 'Hobbits truly think of the Green Dragon as a “great place”. Save the Barliman’s Best for your full-sized patrons, and while they may have to stoop slightly to get in, they’ll all stay for the raucous ale-clashing, table-top-singing good times: "Oh you can search far and wide, You can drink the whole town dry, But you’ll never find a beer so brown, Oh you’ll never find a beer so brown!”'
		},

		milliways: {
			name: 'Milliways!',
			origin: 'The Restaurant at the End of the Universe, Douglas Adams, 1980',
			drink: 'The Pan Galactic Gargle Blaster',
			img: 'images/milliways.jpg',
			alt: 'Colourful logo for Milliwatts, the Restaurant at the End of the Universe',
			description: 'With some of the most staggeringly extravagant decor and patrons from all across time and space, Milliways is a five-star establishment overlooking the end of the universe. Prices for such an experience can be high,  but don’t worry, patrons will just need to put a penny in a bank account! They will either time travel (or use an Infinite Improbability Drive) to get to your pop up, and by the time they’re paying their astronomical bill, the accrued interest on that penny should be more than enough.'
		},

		tenForward: {
			name: 'Ten-Forward!',
			origin: 'Star Trek: The Next Generation, first seen 1988, “The Child”',
			drink: 'Synthetic beverages',
			img: 'images/tenforward.jpg',
			alt: 'Jean Luc Picard talking with Geordie LaForge and Worf at the bar in Ten Forward',
			description: 'Located on Deck 10, Section 1 of a galaxy-class Starship, the view from your pop up will be gazing out onto strange new worlds and where no man has gone before. With someone like Guinan behind the bar, your patrons will be invited to try the very best that replicators can provide while having a sympathetic soul to listen to their worries. While synthehol should keep the rowdiness to a minimum, Bajoran ale, Vulcan port or Klingon Bloodwine should all be available, just keep on eye on the Borg, they’re notorious light weights.'
		}
	};


	$('form').on('submit', function(e){
		e.preventDefault();

		if( ($('input[name=ambience]:checked').length<=0) || ($('input[name=drink]:checked').length<=0) || ($('input[name=clientele]:checked').length<=0) || ($('input[name=eraGen]:checked').length<=0) ) {
			$(".error").fadeIn();
		} else {

		$('html, body').animate({
		        scrollTop: $('.result').offset().top - 20
		    }, 'slow');

		$("div.replay").show();

		var feel = $('input[name=ambience]:checked').data('cat');
		moes += ambience[feel].moes;
		kavanaghs += ambience[feel].kavanaghs;
		milliways += ambience[feel].milliways;
		tenForward += ambience[feel].tenForward;
		ricks += ambience[feel].ricks;
		cantina += ambience[feel].cantina;
		cheers += ambience[feel].cheers;
		greenDragon += ambience[feel].greenDragon;
		// console.log(moes);

		var drink = $('input[name=drink]:checked').data('cat');
		moes += drinkType[drink].moes;
		kavanaghs += drinkType[drink].kavanaghs;
		milliways += drinkType[drink].milliways;
		tenForward += drinkType[drink].tenForward;
		ricks += drinkType[drink].ricks;
		cantina += drinkType[drink].cantina;
		cheers += drinkType[drink].cheers;
		greenDragon += drinkType[drink].greenDragon;
		// console.log(moes);

		var clientele = $('input[name=clientele]:checked').data('cat');
		moes += clientType[clientele].moes;
		kavanaghs += clientType[clientele].kavanaghs;
		milliways += clientType[clientele].milliways;
		tenForward += clientType[clientele].tenForward;
		ricks += clientType[clientele].ricks;
		cantina += clientType[clientele].cantina;
		cheers += clientType[clientele].cheers;
		greenDragon += clientType[clientele].greenDragon;
		// console.log(moes);

		var era = $('input[name=eraGen]:checked').data('cat');

		moes += eraGenType[era].moes;
		kavanaghs += eraGenType[era].kavanaghs;
		milliways += eraGenType[era].milliways;
		tenForward += eraGenType[era].tenForward;
		ricks += eraGenType[era].ricks;
		cantina += eraGenType[era].cantina;
		cheers += eraGenType[era].cheers;
		greenDragon += eraGenType[era].greenDragon;
		// console.log(moes);

		var finalTally = {
			moes: moes, 
			kavanaghs: kavanaghs,
			milliways: milliways,
			tenForward: tenForward,
			ricks: ricks,
			cantina: cantina,
			cheers: cheers,
			greenDragon: greenDragon
		};
			// console.log(finalTally);

		var finalResults = [];

		var highestScore = Math.max(moes, kavanaghs, milliways, tenForward, ricks, cantina, cheers, greenDragon);

		// console.log(highestScore);

		for (var bar in finalTally) {
			if (highestScore === finalTally[bar]){
				finalResults.push(bar);
			}
		};

		var index = Math.floor(Math.random() * finalResults.length);
		// console.log(index);

		// console.log(finalResults[index]);
		var barWinner = finalResults[index];
		// console.log(barWinner);

		
		// console.log(barDetails[barWinner].name);

		var barDetailsDiv = ' <h3>Your Pop-Up Bar is:</h3><h1 class="name">' + barDetails[barWinner].name + '</h1><h4 class="details"><span class="origin">Origin: </span>' + barDetails[barWinner].origin + '</h4><h4 class="sig-drink"><span class="sigDrink">Signature Drink: </span>' + barDetails[barWinner].drink + '</h4>';
		
		// console.log(barDetails);

		var barDescription = '<img src="' + barDetails[barWinner].img + '" class="bar-img" alt="' + barDetails[barWinner].alt + '"><div class="bar-description"><p class="description">' + barDetails[barWinner].description + '</p></div>';


		$(".bar-details").append(barDetailsDiv);
		$(".bar-description-wrap").append(barDescription);
		
} //end else
	});

	});




		







	

	
