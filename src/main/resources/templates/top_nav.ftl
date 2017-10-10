<div class="navbar navbar-expand-lg topnav">

    <a class="navbar-brand" href="#">
        <i class="fa fa-odnoklassniki"></i>&nbsp;&nbsp;<span><b>Chumbok UI Kit</b></span>
    </a>

    <div class="nav ">

        <div class="collapse navbar-collapse">

            <div class="navbar-nav mr-auto"></div>

            <div class="dropdown show my-2 my-lg-0">

                <a href="#" class="white-link" data-toggle="dropdown">

                    <div class="username dropdown-toggle">
                        <img src="assets/image/user.png" height="28px" width="28px">
                        <span>&nbsp;&nbsp;<b>Mossaddeque</b></span>&nbsp;
                    </div>
                </a>

                <div class="dropdown-menu">

                    <a class="dropdown-item" href="#">
                        <i class="fa fa-user text-primary"></i> <span class="hidden-sm-down">&nbsp;Account Details</span>
                    </a>

                    <a class="dropdown-item" href="#">
                        <i class="fa fa-life-ring text-info" aria-hidden="true"></i> <span class="hidden-sm-down">&nbsp;Support</span>
                    </a>

                    <div class="dropdown-divider"></div>

                    <a class="dropdown-item" href="#" data-toggle="modal" data-target="#themeChooserModal">
                        <i class="fa fa-hashtag" aria-hidden="true"></i> <span class="hidden-sm-down">&nbsp;Change theme</span>
                    </a>

                    <div class="dropdown-divider"></div>

                    <a class="dropdown-item" href="#">
                        <i class="fa fa-sign-out text-danger" aria-hidden="true"></i> <span class="hidden-sm-down">&nbsp;Sign Out</span>
                    </a>

                </div>
            </div>

            <div class="my-2 my-lg-0 notification">
                <a href="#" class="white-link"><i class="fa fa-bell" aria-hidden="true"></i></a>
            </div>

        </div>


    </div>

</div>

<#include "theme_changer_modal.ftl"/>