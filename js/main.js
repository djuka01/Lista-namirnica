var itemInput = $('.item');
var itemRow = '';
$('.add-item').on('click', function () {
  var newItem = itemInput.val();

// Dodavanje namirnice u tabelu
  if(newItem != '') {
    itemRow = '<tr>';
    itemRow += '<td>' + newItem + '</td>';
    itemRow += '<td><button class= "btn btn-danger delete">Obrisi</button></td>';
    itemRow += '<tr>';
    $('.item-list tbody').append(itemRow);

     // Resetovanje inputa
    itemInput.val('').focus();
  }else {
     alert('Unesite namirnicu!');
  }
});

  // Brisanje iz liste
$('tbody').on('click', '.delete', function () {
  $(this).closest('tr').remove();
  itemInput.focus();
});
