$('.carousel').carousel(
    {
        interval:1000,
        pause:false
    }
);

$(function()
{
    var band;
    var band2;

    /*velocidades*/
    $('#velocidad').change(function()
    {
        const options = $(".carousel").data()['bs.carousel']["_config"];
        options.interval = $(this).val();
    });

    /* boton stop y play */
    $(".indicadores").on('click', function()
    {   
        alert(band2);
        if( band2 == null || band2 == false)
        {
            
            $('.carousel').carousel('pause');
            band2 = false;

            if(band == null || band == false)
            {
                $('#boton').removeClass('fa-pause');
                $('#boton').addClass('fa-play');
                band = true;
                
            }
        }

    });

    $('#boton').on('click', function()
    {
        if( band == null || band == false )
        {
            $(this).removeClass('fa-pause');
            $(this).addClass('fa-play');
            $('.carousel').carousel('pause');
            band = true;
        }

        else{
            $(this).removeClass('fa-play');
            $(this).addClass('fa-pause');
            $('.carousel').carousel();
            band = false;
        }
    });
   




});




