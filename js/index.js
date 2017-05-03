/* globals $ */
$('input').on('input change', mirror);

function mirror() {
	var element = $(this);
	var row = element.closest("tr");

	if(element.is(':radio')) {
		row.find('input').val([element.val()]);
		row.find('.value').text(element.val());
	}
	else {
		if(element.is(':checkbox')) {
			row.find('input').prop('checked', element.prop('checked'));
			row.find('.value').text(element.prop('checked'));
		}
		else {
			row.find('input').val(element.val());
			row.find('.value').text(element.val());
		}
	}
}

$('select').on('input change', selectFunction);

function selectFunction() {
	var element = $(this);
	var row = element.closest("tr");

	row.find('select').val(element.val());
	row.find('.value').text(element.val());
}

$('textarea').on('input change', textareaFunction);

function textareaFunction() {
	var element = $(this);
	var row = element.closest("tr");

	row.find('textarea').val(element.val());
	row.find('.value').text(element.val());
}