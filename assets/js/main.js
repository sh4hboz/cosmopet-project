window.addEventListener('DOMContentLoaded', function(){
    let headerBars = document.querySelector('.header_bars');
    let headerMob = document.querySelector('.header_mob');
    let headerClose = document.querySelector('.header_close');
    let headerMobBg = document.querySelector('.header_mob-bg');
    let body = document.querySelector('body');

    headerBars.addEventListener('click', function () {
        headerMob.classList.add('active');
        body.classList.add('no-scroll');
    });

    function removeActiveClass() {
        headerMob.classList.remove('active');
        body.classList.remove('no-scroll');
    }

    headerClose.addEventListener('click', removeActiveClass);
    headerMobBg.addEventListener('click', removeActiveClass);
    
    if (document.querySelector('.change_block')) {
        // document.querySelector('.change_block.active').style.height = document.querySelector('.change_block.active').scrollHeight+'px'

        document.getElementById('select_pets').addEventListener('click', function() {
            document.querySelector('.change_block:has(#select_pets)').classList.remove('active')
            this.parentElement.style.height = '0px';
            var nextChangeBlock = this.parentElement.nextElementSibling;
            nextChangeBlock.style.height = `${nextChangeBlock.scrollHeight}px`;
        })   
    }

    if (document.querySelector('.pet_photo')) {
        let fileInput = document.querySelector('.pet_photo input[type="file"]');

        fileInput.addEventListener('change', function() {
            let file = fileInput.files[0];
            if (file) {
                let fileURL = URL.createObjectURL(file);
                let previewImage = document.querySelector('.pet_photo .preview');

                previewImage.src = fileURL;
            }
        });
    }

    if (document.querySelector('.collapse_input .plus')) {
        document.querySelectorAll('.collapse_input .plus').forEach(function(plusBtn) {
            plusBtn.addEventListener('click', function() {
                let prevInput = this.previousElementSibling;
                let nextInput = this.nextElementSibling;
                prevInput.classList.add('active');
                this.classList.add('active');
                nextInput.remove()
            });
        });
    }

    if (document.querySelectorAll('.counter .minus')) {
        document.querySelectorAll('.counter .minus').forEach(function(minusBtn) {
            minusBtn.addEventListener('click', function() {
                let input = this.parentElement.querySelector('input');
                let num = parseInt(input.value, 10);

                if (num > 0) {
                    num--;
                    input.value = num;
                }
            });
        });

        document.querySelectorAll('.counter .plus').forEach(function(plusBtn) {
            plusBtn.addEventListener('click', function() {
                let input = this.parentElement.querySelector('input');
                let num = parseInt(input.value, 10);
                let max = parseInt(input.getAttribute('max'), 10);

                if (num < max) {
                    num++;
                    input.value = num;
                }
            });
        });
    }
    function openModalOnClick(element1, element2) {
        let triggerElements = document.querySelectorAll(element1);
        let targetElement = document.querySelector(element2);
    
        triggerElements.forEach(function(triggerElement) {
            triggerElement.addEventListener('click', function() {
                document.querySelectorAll('.modal').forEach(function(modal_item) {
                    modal_item.classList.remove('modal_open');
                });
                targetElement.classList.add('modal_open');
            });
        });
    }
    function closeModalOnClick(element1, element2) {
        let triggerElements = document.querySelectorAll(element1);
    
        triggerElements.forEach(function(triggerElement) {
            triggerElement.addEventListener('click', function() {
                if (document.querySelector('.modal.modal_open')) {
                    document.querySelector('.modal.modal_open').classList.remove('modal_open');
                }
            });
        });
    }
    
    if(document.querySelector('.return')){
        let checkboxes = document.querySelectorAll('.return input[type="checkbox"]');
        let returnButton = document.getElementById('return_button');

        function toggleButtonState() {
            let isChecked = false;
            checkboxes.forEach(function(checkbox) {
                if (checkbox.checked) {
                    isChecked = true;
                }
            });

            if (isChecked) {
                returnButton.removeAttribute('disabled');
            } else {
                returnButton.setAttribute('disabled', 'disabled');
            }
        }

        checkboxes.forEach(function(checkbox) {
            checkbox.addEventListener('change', toggleButtonState);
        });

        toggleButtonState();

        let return_form = returnButton.closest('form');
        let plusButton = document.querySelector('.return_modal1 .plus');

        returnButton.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector('.return_modal1').classList.add('modal_open');
            setTimeout(function() {
                return_form.submit();
            }, 5000);        
        });
        
        // plusButton.addEventListener('click', function() {
        //     document.querySelector('.return_modal1').classList.remove('modal_open');
        //     document.querySelector('.return_modal2').classList.add('modal_open');
        // });
        // document.querySelector('.modal_back').addEventListener('click', function() {
        //     document.querySelector('.return_modal1').classList.remove('modal_open');
        //     document.querySelector('.return_modal2').classList.add('modal_open');
        // });
        // document.querySelector('.return_modal2 .plus').addEventListener('click', function() {
        //     document.querySelector('.return_modal2').classList.remove('modal_open');
        // });


    }
        
    openModalOnClick('#auth', '.auth1');
    openModalOnClick('.register_btn', '.auth2');
    openModalOnClick('.login_btn', '.auth4');
    openModalOnClick('.auth2 button', '.auth3');
    openModalOnClick('.auth4 button', '.auth5');
    openModalOnClick('.btn_return_modal1', '.return_modal2');
    closeModalOnClick('.modal .plus', '.modal');
    closeModalOnClick('.modal_back', '.modal');

    if (document.querySelector('.faq')) {

        let faqToggles = document.querySelectorAll('.faq_top');

        faqToggles.forEach(function(toggle) {
            toggle.addEventListener('click', function() {
                const faqTop = this;
                const faqBody = faqTop.nextElementSibling;

                document.querySelectorAll('.faq_body').forEach(function(body) {
                    if (body !== faqBody) {
                        body.style.height = '0px';
                        body.classList.remove('open');

                        const otherArrow = body.previousElementSibling.querySelector('.faq_arr_down');
                        if (otherArrow) {
                            otherArrow.classList.remove('rotate');
                        }
                    }
                });

                if (faqBody.classList.contains('open')) {
                    faqBody.style.height = '0px';
                } else {
                    faqBody.style.height = `${faqBody.scrollHeight}px`;
                }

                faqBody.classList.toggle('open');

                const faqArrow = faqTop.querySelector('.faq_arr_down');
                if (faqArrow) {
                    faqArrow.classList.toggle('rotate');
                }
            });
        });
    }

    if (document.querySelector('.faq_section')) {

        let faqToggles = document.querySelectorAll('.faq_top');

        faqToggles.forEach(function(toggle) {
            toggle.addEventListener('click', function() {
                const faqTop = this;
                const faqBody = faqTop.nextElementSibling;

                document.querySelectorAll('.faq_body').forEach(function(body) {
                    if (body !== faqBody) {
                        body.style.height = '0px';
                        body.classList.remove('open');

                        const otherArrow = body.previousElementSibling.querySelector('.faq_arr_down');
                        if (otherArrow) {
                            otherArrow.classList.remove('rotate');
                        }
                    }
                });

                if (faqBody.classList.contains('open')) {
                    faqBody.style.height = '0px';
                } else {
                    faqBody.style.height = `${faqBody.scrollHeight}px`;
                }

                faqBody.classList.toggle('open');

                const faqArrow = faqTop.querySelector('.faq_arr_down');
                if (faqArrow) {
                    faqArrow.classList.toggle('rotate');
                }
            });
        });
    }


    if (document.querySelector('.photo_image')) {
        document.querySelectorAll('.photo_image input[type="file"]').forEach(input => {
            input.addEventListener('change', function() {
                const file = this.files[0];
                const reader = new FileReader();
                const img = this.previousElementSibling;
        
                reader.onload = function() {
                    img.src = reader.result;
                };
        
                if (file) {
                    reader.readAsDataURL(file);
                }
            });
        });
    }
})