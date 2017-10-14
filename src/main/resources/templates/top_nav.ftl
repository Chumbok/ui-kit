<div class="navbar navbar-expand-lg topnav">

    <a class="navbar-brand" href="#">
        <i class="fa fa-odnoklassniki"></i>&nbsp;&nbsp;<span><b>Chumbok UI Kit</b></span>
    </a>

    <div class="nav ">

        <div class="collapse navbar-collapse">

            <div class="navbar-nav mr-auto"></div>

            <div class="my-2 my-lg-0 notification">
                <a href="#" class="white-link"><i class="fa fa-bullhorn"></i></a>
            </div>

            <div class="dropdown show my-2 my-lg-0">

                <a href="#" class="white-link" data-toggle="dropdown">

                    <div class="username dropdown-toggle" aria-expanded="false">
                        <img src="assets/image/user.png" height="28px" width="28px">
                    </div>
                </a>

                <div class="dropdown-menu dropdown-menu-right">

                    <a class="dropdown-item" href="#">
                        <span class="hidden-sm-down">&nbsp;Mossaddeque Mahmood</span>
                    </a>

                    <div class="dropdown-divider"></div>

                    <a class="dropdown-item" href="#" data-toggle="modal" data-target="#themeChooserModal">
                        <i class="fa fa-hashtag"></i> <span class="hidden-sm-down">&nbsp;Change theme</span>
                    </a>

                    <a class="dropdown-item" href="#" data-toggle="modal" data-target="#languageChooserModal">
                        <i class="fa fa-language"></i> <span class="hidden-sm-down">&nbsp;Change language</span>
                    </a>


                    <a class="dropdown-item" href="#">
                        <i class="fa fa-cog"></i> <span class="hidden-sm-down">&nbsp;Settings</span>
                    </a>

                    <div class="dropdown-divider"></div>

                    <a class="dropdown-item" href="#">
                        <i class="fa fa-life-ring text-info"></i> <span class="hidden-sm-down">&nbsp;Support</span>
                    </a>

                    <div class="dropdown-divider"></div>

                    <a class="dropdown-item" href="#">
                        <i class="fa fa-sign-out text-danger"></i> <span class="hidden-sm-down">&nbsp;Sign Out</span>
                    </a>

                </div>
            </div>


        </div>


    </div>

</div>

<#include "theme_changer_modal.ftl"/>
<#include "language_changer_modal.ftl"/>