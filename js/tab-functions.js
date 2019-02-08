var wikiData =
    [{
        'heading1':
        {
            lvl2heading: [
                {
                    'heading11': [
                        'heading111',
                        'heading112'
                    ]
                },
                {
                    'heading12': [
                        'heading121',
                        'heading122'
                    ]
                }
            ],
            'data': `
            <section id="download-section" class="doc-section">
									<h2 class="section-title">Download</h2>
									<div class="section-block">
										<p>this is sample text</p>
									</div>
								</section>
								<!--//doc-section-->
								<section id="installation-section" class="doc-section">
									<h2 class="section-title">Installation</h2>
									<div id="step1" class="section-block">

										<div class="code-block">
											<h6>Default code example:</h6>
											<p>
												<code>bower install &lt;package&gt;</code>
											</p>
											<p>
												<code>npm install &lt;package&gt;</code>
											</p>
										</div>
										<!--//code-block-->
									</div>
									<!--//section-block-->


								</section>
								<!--//doc-section-->
             `
        }
    },
    {
        'heading2':
        {
            lvl2heading: [
                {
                    'heading21': [
                        'heading211',
                        'heading212'
                    ]
                },
                {
                    'heading22': [
                        'heading221',
                        'heading222'
                    ]
                }
            ],
            'data': 'heading 2 html'
        }


    }
    ]



$(wikiData).each(function (index, value) {
    var headingFirst = Object.keys(value)[0]
    var indexCounter = index
    console.log('into wiki data', Object.keys(value)[0]);

    $('#doc-menu').append('<a class="nav-link scrollto main-heading" id="'+headingFirst+'" href="#' + headingFirst + '">' + headingFirst + '</a>');
    
    $('#doc-menu').append('<nav class="doc-sub-menu nav flex-column" id="'+headingFirst+'-second-menu'+indexCounter+'"></nav>')
 $(wikiData[indexCounter][headingFirst].lvl2heading).each(function(index,value) {
     var indexCounter2 = index
    var headingSecond = Object.keys(value)[0]
   
    $('#'+headingFirst+'-second-menu'+indexCounter).append('<a class="nav-link scrollto" href="#'+headingSecond+'">'+headingSecond+'</a>');
    
     console.log('printing 2nd lvl heading',wikiData[indexCounter][headingFirst].lvl2heading[indexCounter2][headingSecond] )

     $('#'+headingFirst+'-second-menu'+indexCounter).append('<nav class="doc-sub-menu2" style="padding-left:21px !important;"  flex-column" id="'+headingSecond+'-third-menu'+indexCounter+'"></nav>')

     $(wikiData[indexCounter][headingFirst].lvl2heading[indexCounter2][headingSecond]).each(function(index,value) {

        $('#'+headingSecond+'-third-menu'+indexCounter).append('<a class="nav-link scrollto" href="#'+value+'">'+value+'</a>');
    

     })
  

 })


    // if(value.name == company){ //check the company




    //     options += '<option value="'+value.product+'">'+value.product+'</option>'; //add the option element as a string
    // }
    // $('#doc-menu').html(options);

});

$('.main-heading').click(function() {
    var heading = $(this).attr('id')
    console.log(heading)
    var filteredHtml = null;
    $(wikiData) .each(function(index,value){
        if (Object.keys(value)[0] == heading) {
            console.log('found', this[heading].data)
          filteredHtml =  this[heading].data
          
        }
        return;
    })
   $('#content-inner-html').html(filteredHtml)
    console.log(filteredHtml)
    
})