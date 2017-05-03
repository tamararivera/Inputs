/* globals $ */
$('input').on('input change', function() {
  
  $(this).closest("tr").find('.value').text($(this).val());
  $(this).closest("tr").find('input').val($(this).val());
});