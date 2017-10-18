var formValues = {
    categories : [
        {
            name: 'Межкомнатные двери',
            price: {min: 0, max: 150000},
            color: [
                {
                    hex: '#b88d5a',
                    name: 'Эш Вайт'
                },
                {
                    hex: '#48fd5a',
                    name: 'Эш Грей'
                },
                {
                    hex: '#543724',
                    name: 'Браун'
                }
            ],
            criteria: [
                'Самовывоз',
                'Не самовывоз'
            ]
        },
        {
            name: 'Входные двери',
            price: {min: 0, max: 200000},
            color: [
                {
                    hex: '#3e97b8',
                    name: 'Скай'
                },
                {
                    hex: '#fd1f2f',
                    name: 'Алый'
                },
                {
                    hex: '#502954',
                    name: 'Лонг Найтв'
                }
            ],
            criteria: [
                'Дуб',
                'Береза',
                'Секвойа'
            ]
        },
        {
            name: 'Обои',
            price: {min: 0, max: 100000},
            color: [
                {
                    hex: '#ffffff',
                    name: 'Он Вайт'
                },
                {
                    hex: '#fd9fbc',
                    name: 'Пинки'
                },
                {
                    hex: '#36c790',
                    name: 'Лазурный'
                }
            ],
            criteria: [
                'Обычные',
                'Моющиеся',
                'Монотонные'
            ]
        },
        {
            name: 'Ламинат',
            price: {min: 0, max: 250000},
            color: [
                {
                    hex: '#acb0b8',
                    name: 'Эш Грей'
                },
                {
                    hex: '#85703a',
                    name: 'Вуди'
                },
                {
                    hex: '#543724',
                    name: 'Дарк Секвойа'
                }
            ],
            criteria: [
                'Ламинат',
                'Паркет'
            ]
        },
    ],
    selectedCategory: 0,
    selectedPrice: {min: 20000, max: 90000},
    selectedColor: 0,
    selectedCriteria: 0,
    getSelectedCategory: function() {
        return this.categories[this.selectedCategory];
    },
    getSelectedColor: function () {
        return this.getSelectedCategory().color[this.selectedColor];
    },
    getSelectedCriteria: function () {
        return this.getSelectedCategory().criteria[this.selectedCriteria];
    }
};



//Category Scripts
$(document).on('click','.category:not(.active)', function() {
    $('.category').removeClass('active');
    $(this).addClass('active');
    $('#category-value').val($(this).attr('data-value')).change();
});
$(document).on('change','#category-value', function() {
    onCategoryChanged();
});
function onCategoryChanged() {
    formValues.selectedCategory = $('#category-value').val();
    drawSelectOptions();
    declareRangeInput();
    drawCriteriaOptions();
}
onCategoryChanged();



//Money Range Scripts
$('.response-width').on('keypress', function() {
    return this.style.width = ((this.value.length + 1) * 5.5) + 'px';
});
$('#amount-min-value, #amount-max-value').on('change',function() {
    formValues.selectedPrice.min = $('#amount-min-value').val();
    formValues.selectedPrice.max = $('#amount-max-value').val();
    declareRangeInput();
});
function declareRangeInput() {
    $(function () {
        var elem = $('#slider-range');
        var min = $('#amount-min-value');
        var max = $('#amount-max-value');
        $(elem).slider({
            range: true,
            min: 0,
            max: formValues.getSelectedCategory().price.max,
            values: [formValues.selectedPrice.min, formValues.selectedPrice.max],
            slide: function (event, ui) {
                formValues.selectedPrice.min = ui.values[0];
                formValues.selectedPrice.max = ui.values[1];
                drawNums();
            }
        });
        function drawNums() {
            $(min).val(formValues.selectedPrice.min);
            $(max).val(formValues.selectedPrice.max);
            $('.response-width').keypress();

        }
        drawNums();
    });
}

//Color select scripts
$(document).on('click', '.select', function() {
    $(this).toggleClass('focus');
});
$(document).on('click', '.select .input-group-option', function() {
   $(this).parents('.select').find('input[type="hidden"]').val($(this).attr('data-value')).change();
});
$(document).on('change','.select input[type="hidden"]', function() {
    $(this).parent().find('.select-vision').html($(this).parent().find('.input-group-option').eq($(this).val()).html());
});
$(document).on('change', '#color-value', function() {
    formValues.selectedColor = $(this).val();
});
function drawSelectOptions() {
    var elem = $('#color-picker-select');
    var options = $(elem).find('.input-group-options').html('');
    var colors = formValues.getSelectedCategory().color
    for (var i in colors) {
        $(options).append('<div class="input-group-option" data-value="' + i + '"><span class="color-select" style="background-color: ' + colors[i].hex + '"> </span> ' + colors[i].name + ' </div>');
    }
    $(elem).find('input[type="hidden"]').val(formValues.selectedColor).change();
}



//Criteria value scripts
$(document).on('change','#criteria-value', function() {
    formValues.selectedCriteria = $(this).val();
});
function drawCriteriaOptions() {
    var elem = $('#criteria-value').html('');
    var c = formValues.getSelectedCategory().criteria;
    for (var i in c) {
        $(elem).append('<option value="' + i + '">' + c[i] + '</option>')
    }
    $(elem).find('option[value=' + formValues.selectedCriteria + ']').attr('selected','').change();
}