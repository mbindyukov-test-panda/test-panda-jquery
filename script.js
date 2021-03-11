$(function () {

    const $rangeRed = $(".red-slider-range");
    const $rangeGreen = $(".green-slider-range");
    const $rangeBlue = $(".blue-slider-range");

    $("#slider-red").slider(getSliderConfig($rangeRed));
    $("#slider-green").slider(getSliderConfig($rangeGreen));
    $("#slider-blue").slider(getSliderConfig($rangeBlue));

    $('#btn-color').click(() => {
        applyColor('color');
    })

    $('#btn-background').click(() => {
        applyColor('background-color');
    })
});

const getSliderConfig = ($range) => ({
    min: 0,
    max: 255,
    slide: function (event, ui) {
        const ratio = 100 / 255;
        $range.css('width', ui.value * ratio + '%')
    }
})

const applyColor = (type) => {
    const red = $("#slider-red").slider("value");
    const green = $("#slider-green").slider("value");
    const blue = $("#slider-blue").slider("value");
    $('#text-area').css(type, `rgb(${red},${green},${blue})`);
}