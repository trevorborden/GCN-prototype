/*

	How to use:
	1)	Copy this jQuery to your project
	2)	Add [data-search] to search input
	3)	Add [data-filter-item] to the items that should be filtered
	4)	Add [data-filter-name="SEARCH TERM"] to the filter-items

*/

$('[data-search]').on('keyup', function() {
	var searchVal = $(this).val();
	var filterItems = $('[data-filter-item]');

	if ( searchVal != '' ) {
		filterItems.addClass('hidden');
		$('[data-filter-item][data-filter-name*="' + searchVal.toLowerCase() + '"]').removeClass('hidden');
	} else {
		filterItems.addClass('hidden');
	}
});


// carpentry
$(function() {
        $("#carpentry-trigger").click(function() {
            $(".carpentry").removeClass('hidden');
          $(".selection-instruction").addClass('hidden');
           $(".gc").addClass('hidden');
          $("#carpentry-trigger").addClass('item-selected');
        });
    });

$(function() {
        $("#carpentry-token").click(function() {
            $(".carpentry").addClass('hidden');
           $(".gc").removeClass('hidden');
           $(".selection-instruction").removeClass('hidden');
          $("#carpentry-trigger").removeClass('item-selected');
        });
    });



// painting
$(function() {
        $("#painting-trigger").click(function() {
            $("#painting").addClass('visible');
          $("#painting").removeClass('disappear');
           $(".gc").addClass('hidden');
           $(".selection-instruction").addClass('hidden');
           $(".painting").removeClass('hidden');
          $("#painting-trigger").addClass('item-selected');
        });
    });


$(function() {
        $("#painting").click(function() {

          $("#painting").addClass('disappear');
           $(".painting").addClass('hidden');
          $("#painting-trigger").removeClass('item-selected');
        });
    });


// Fire Alarm
$(function() {
        $("#electronic-security-trigger").click(function() {
           $("#electronic-security").addClass('visible');
           $(".gc").addClass('hidden');
           $(".selection-instruction").addClass('hidden');
           $(".fire").removeClass('hidden');
           $("#electronic-security-trigger").addClass('item-selected');
        });
    });

$(function() {
        $("#electronic-security").click(function() {
           $("#electronic-security").removeClass('visible');
           $(".fire").addClass('hidden');
           $("#electronic-security-trigger").removeClass('item-selected');
        });
    });

// Millwork
$(function() {
        $("#millwork-trigger").click(function() {
           $("#millwork").addClass('visible');
          $("#millwork-trigger").addClass('item-selected');
        });
    });

$(function() {
        $("#millwork").click(function() {
           $("#millwork").removeClass('visible');
           $("#millwork-trigger").removeClass('item-selected');
        });
    });

// Countertops
$(function() {
        $("#countertops-trigger").click(function() {
           $("#countertops").addClass('visible');
          $(".countertops").removeClass('hidden');
           $("#countertops-trigger").addClass('item-selected');
        });
    });

$(function() {
        $("#countertops").click(function() {
           $("#countertops").removeClass('visible');
           $(".countertops").addClass('hidden');
           $("#countertops-trigger").removeClass('item-selected');
        });
    });

// Fire Detection
$(function() {
        $("#fire-alarm-trigger").click(function() {
           $("#fire-alarm").addClass('visible');
           $("#fire-alarm-trigger").addClass('item-selected');
        });
    });

$(function() {
        $("#fire-alarm").click(function() {
           $("#fire-alarm").removeClass('visible');
           $("#fire-alarm-trigger").removeClass('item-selected');
        });
    });



// Save Button
$(function() {
        $("#next").click(function() {
           $("#step-1").addClass("move-left");
        });
    });



// Shall all Services Button
$(function() {
        $("#show").click(function() {
           $(".container").addClass("get-big");
        });
    });
