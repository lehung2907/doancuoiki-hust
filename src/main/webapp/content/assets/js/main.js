(function ($) {
    window.onload = function () {
        $(document).ready(function () {		
			pie_chart_for_home();
			bar_chart_for_home();
			bar_chart_for_home_sm(); 
			moblie_bar();
			height_to_navbar();
			change_input_number();
			multi_acrodition();
        });
    };
})(jQuery);


function pie_chart_for_home(){
	var chart_box = document.querySelector(".main-chart-home");
	if(chart_box == null){
		return 0;
	}

	else{
		var randomScalingFactor = function() {
			return Math.round(Math.random() * 100);
		};
		var ctx = document.getElementById("myChart");
		if(ctx == null){
			return 0;
		}
		else{
			var myChart = new Chart(ctx, {
				type: 'doughnut',
				data: {
					labels: ['Số kiến nghị','Số chưa thực hiện', 'Số thực hiện'],
					datasets: [{
					data: [
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
					],
					backgroundColor: [
						'#003173',
						'#FFA726',
						'#1BA0E1',
					],
					borderWidth: 0
					}]
				},
				options: {
					cutoutPercentage: 80,
					responsive: true,
					legend: {
						position: 'bottom',
						display: false,
					},
					title: {
						display: false,
						text: 'Chart.js Doughnut Chart'
					},
					animation: {
						animateScale: true,
						animateRotate: true
                    },
                    
					tooltips: {
						callbacks: {
						afterLabel: function(tooltipItem, data) {
						var dataset = data['datasets'][0];
						var percent = Math.round((dataset['data'][tooltipItem['index']] / dataset["_meta"][0]['total']) * 100)
						return '(' + percent + '%)';
						}
						},
						backgroundColor: '#2196F3',
						bodyFontSize: 14,
						displayColors: false,
						z: 3,
					}
				}
			});
		}
	}
}

function bar_chart_for_home(){
	var chart_box = document.querySelector(".main-chart-home");
	
	if(chart_box == null){
		return 0;
	}

	else{
		var label = ['Tăng thu NSNN', 'Giảm chi thường', 'Giảm chi đầu tư', 'Kiến nghị khác'];
		var color = Chart.helpers.color;
		var barChartData = {
			labels: ["Tăng thu NSNN", "Giảm chi thường", "Giảm chi đầu tư", "Kiến nghị khác"],
			datasets: [{
				backgroundColor: "#0C64A8",
				data: [800, 500, 1400, 1400],
                barThickness: 20,
                
			}, {
				backgroundColor: "#1BA0E1",
				data: [1100, 800, 2300, 800],
                barThickness: 20,
			},
			{
				backgroundColor: "#A4C2FC",
				data: [1600, 1600, 400, 1200],
                barThickness: 20,
			}]

		};
		
	  
	var ctx = document.getElementById('myBarGraph').getContext('2d');
	if(ctx == null){
		return 0;
	}

	else{
		window.myBar = new Chart(ctx, {
			type: 'bar',
			data: barChartData,
			options: {
                responsive: true,
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 20
                    }
                },
				legend: {
					position: 'top',
					display: false,
					
				},
				title: {
					display: false,
					text: 'Chart.js Bar Chart'
				},
				scales: {
					xAxes: [
					  {
						barPercentage: 0.5,
						categoryPercentage: 1,
						ticks: {
							fontSize: 14
						},
						gridLines: {
                            lineWidth: 0,
                            zeroLineWidth: 1,
						}
					  }
					],
					yAxes: [
					  {
						ticks: {
							fontSize: 14,
							beginAtZero:true,
						},
						gridLines: {
                            color: '#C8C8C8',
                            drawBorder: true,
                            lineWidth: 0,
                            zeroLineWidth: 1,
                            
                        },
					  }
					]
				}
			}
		});
	}
	}
	
	
}

function bar_chart_for_home_sm(){
    var chart_box = document.querySelector(".main-chart-home");
    
	if(chart_box == null){
		return 0;
	}

	else{
		var label = ['Giảm chi', 'Giảm chi', 'Kiến nghị'];
		var color = Chart.helpers.color;
		var barChartData = {
			labels: ["Giảm chi", "Giảm chi", "Kiến nghị"],
			datasets: [{
				backgroundColor: [ '#FFC62A', '#0537AB', '#00B3C2'],
				data: [900, 600, 2400],
                barThickness: 30,
                
            }],
            
		};
		
	  
    var ctx = document.getElementById('myBarGraph_two').getContext('2d');
    
	if(ctx == null){
		return 0;
	}
	else{
		window.myBar = new Chart(ctx, {
			type: 'bar',
			data: barChartData,
			options: {
                responsive: true,
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 20
                    }
                },
				legend: {
					position: 'top',
					display: false,
					
				},
				title: {
					display: false,
					text: 'Chart.js Bar Chart'
				},
				scales: {
					xAxes: [
					  {
						barPercentage: 0.5,
						categoryPercentage: 1,
						ticks: {
							fontSize: 14
						},
						gridLines: {
						  display: false
						}
					  }
					],
					yAxes: [
					  {
						ticks: {
							fontSize: 14,
                            beginAtZero:true,
                            
						},
						gridLines: {
                            color: '#C8C8C8',
                            
                        },
					  }
					]
				}
			}
		});
	}
	}
	
	
}

function height_to_navbar(){
	var height_nav = $('.nav-bar').height();
	
    if($('.main-access').height() <=800){
        $('.nav-bar').css('height','100vh');
	}

	$(window).scroll(function(){
		var check = true;
		if($('.main-access').height() > 800){
			var height_t = $('.main-access').height();
			if(check == true){
				$('.nav-bar').height(height_t);
				check = false;
			}
		}
		else{
			var height_f = $('.main-access').height();
			if(check == false){
				
				$('.nav-bar').height(height_f);
				check = true;
			}
		}
	})
}

function moblie_bar() {
    var $main_nav = $('#main-nav');
    var $toggle = $('.toggle');

    var defaultData = {
        maxWidth: false,
        customToggle: $toggle,
        // navTitle: 'All Categories',
        levelTitles: true,
        pushContent: '#container'
    };

    // add new items to original nav
    $main_nav.find('li.add').children('a').on('click', function() {
        var $this = $(this);
        var $li = $this.parent();
        var items = eval('(' + $this.attr('data-add') + ')');

        $li.before('<li class="new"><a>' + items[0] + '</a></li>');

        items.shift();

        if (!items.length) {
            $li.remove();
        } else {
            $this.attr('data-add', JSON.stringify(items));
        }

        Nav.update(true);
    });

    // call our plugin
    var Nav = $main_nav.hcOffcanvasNav(defaultData);

    // demo settings update

    const update = (settings) => {
        if (Nav.isOpen()) {
            Nav.on('close.once', function() {
                Nav.update(settings);
                Nav.open();
            });

            Nav.close();
        } else {
            Nav.update(settings);
        }
    };

    $('.actions').find('a').on('click', function(e) {
        e.preventDefault();

        var $this = $(this).addClass('active');
        var $siblings = $this.parent().siblings().children('a').removeClass('active');
        var settings = eval('(' + $this.data('demo') + ')');

        update(settings);
    });

    $('.actions').find('input').on('change', function() {
        var $this = $(this);
        var settings = eval('(' + $this.data('demo') + ')');

        if ($this.is(':checked')) {
            update(settings);
        } else {
            var removeData = {};
            $.each(settings, function(index, value) {
                removeData[index] = false;
            });

            update(removeData);
        }
    });
}

function change_input_number() {
	jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="assets/images/ic_up.png" alt=""></div><div class="quantity-button quantity-down"><img src="assets/images/ic_select.png" alt=""></div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });
}

function acrodition_sm_menu() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
}

function multi_acrodition(){
	var accordion = (function(){
  	var $accordion = $('.js-accordion');
	var $accordion_header = $accordion.find('.js-accordion-header');
	var $accordion_item = $('.js-accordion-item');
	   
		// default settings 
		var settings = {
		  // animation speed
		  speed: 400,
		  
		  // close all other accordion items if true
		  oneOpen: false
		};
		  
		return {
		  // pass configurable object literal
		  init: function($settings) {
			$accordion_header.on('click', function() {
			  accordion.toggle($(this));
			  
			  setTimeout(() => {
			  }, 400)
			});
			
			$.extend(settings, $settings); 
			
			// ensure only one accordion is active if oneOpen is true
			if(settings.oneOpen && $('.js-accordion-item.active').length > 1) {
			  $('.js-accordion-item.active:not(:first)').removeClass('active');
			}
			
			// reveal the active accordion bodies
			$('.js-accordion-item.active').find('> .js-accordion-body').show();
		  },
		  toggle: function($this) {
				  
			if(settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
			  $this.closest('.js-accordion')
				.find('> .js-accordion-item') 
				.removeClass('active')
				.find('.js-accordion-body')
				.slideUp()
			}
			
			// show/hide the clicked accordion item
			$this.closest('.js-accordion-item').toggleClass('active');
			$this.next().stop().slideToggle(settings.speed);
		  }
		}
	})();

	accordion.init({ speed: 300, oneOpen: true });
}

