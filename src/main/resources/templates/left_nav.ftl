<div class="left_col scroll-view">

    <div class="navbar nav_title" style="border: 0;">
        <a href="/admin/" class="site_title"><!--<i class="fa fa-paw"></i> --><span>{{business}}</span></a>
    </div>

    <div class="clearfix"></div>

    <!-- sidebar menu -->
    <div id="sidebar-menu" class="main_menu_side hidden-print main_menu ng-cloak">
        <div class="menu_section">
            <ul class="nav side-menu">


                <li><a><i class="fa fa-cube"></i> {{'menu.product' | translate}}  <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                        <li><a href="#!/product/new"><!--<i class="fa fa-cube"></i>--> {{'menu.productNew' | translate}} </a></li>
                        <li><a href="#!/product"><!--<i class="fa fa-cube"></i>--> {{'menu.productList' | translate}} </a></li>
                        <li><a href="#!/product/inventory"><!--<i class="fa fa-cubes"></i>--> {{'menu.inventory' | translate}}</a></li>
                    </ul>
                </li>


                <li><a><i class="fa fa-file-text-o" aria-hidden="true"></i> {{'menu.invoice' | translate}} <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                        <li>
                            <a href="#!/invoice/new"><!--<i class="fa fa-plus-square" aria-hidden="true"></i>--> {{'menu.invoiceNew' | translate}}  </a>
                        </li>

                        <li>
                            <a href="#!/invoice"> <!--<i class="fa fa-list-alt" aria-hidden="true"></i>--> {{'menu.invoiceArchive' | translate}} </a>
                        </li>

                    </ul>
                </li>

                <li><a><i class="fa fa-money" aria-hidden="true"></i> {{'menu.bill' | translate}}  <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                        <li>
                            <a href="#!/bill/new"><!--<i class="fa fa-cart-plus" aria-hidden="true"></i>--> {{'menu.billNew' | translate}} </a>
                        </li>

                        <li>
                            <a href="#!/bill"><!--<i class="fa fa-list-alt" aria-hidden="true"></i>--> {{'menu.billArchive' | translate}}</a>
                        </li>

                    </ul>
                </li>


                <li>
                    <a href="#!/product/inventory">{{'menu.inventory' | translate}}</a>
                </li>


                <!--<li>
                    <a href="#!/accountHead"><i class="fa fa-exchange" aria-hidden="true"></i> {{'menu.accountHead' | translate}} </a>
                </li>-->

                <li>
                    <a href="#!/journal"><i class="fa fa-list-alt" aria-hidden="true"></i> {{'menu.journal' | translate}} </a>
                </li>

                <!--<li>
                    <a href="#!/payment"><i class="fa fa-money" aria-hidden="true"></i> Payment </a>
                </li>-->

                <li><a> <i class="fa fa-area-chart" aria-hidden="true"></i> Report <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                        <li>
                            <a href="#!/report"><!--<i class="fa fa-line-chart" aria-hidden="true"></i>--> {{'menu.report' | translate}} </a>
                        </li>
                    </ul>
                </li>

                <li><a><i class="fa fa-cogs" aria-hidden="true"></i> {{'menu.setting' | translate}} <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">

                        <li>
                            <a href="#!/brand"><!--<i class="fa fa-apple"></i>--> {{'menu.brand' | translate}} </a>
                        </li>

                        <li>
                            <a href="#!/category"><!--<i class="fa fa-list-ul"></i>--> {{'menu.category' | translate}} </a>
                        </li>

                        <li>
                            <a href="#!/accountHead"><!--<i class="fa fa-exchange" aria-hidden="true"></i>--> {{'menu.accountHead' | translate}} </a>
                        </li>

                        <li>
                            <a href="#!/measurement"><!--<i class="fa fa-flask" aria-hidden="true"></i>--> {{'menu.measurement' | translate}} </a>
                        </li>

                        <li>
                            <a href="#!/contact"> {{'menu.contact' | translate}} </a>
                        </li>


                        <!--<li>
                            <a href="#!/accountHead">&lt;!&ndash;<i class="fa fa-exchange" aria-hidden="true"></i>&ndash;&gt; {{'menu.accountHead' | translate}} </a>
                        </li>

                        <li>
                            <a href="#!/measurement">&lt;!&ndash;<i class="fa fa-flask" aria-hidden="true"></i>&ndash;&gt; {{'menu.measurement' | translate}} </a>
                        </li>

                        <li>
                            <a href="#!/brand">&lt;!&ndash;<i class="fa fa-apple"></i>&ndash;&gt; {{'menu.brand' | translate}} </a>
                        </li>

                        <li>
                            <a href="#!/category">&lt;!&ndash;<i class="fa fa-list-ul"></i>&ndash;&gt; {{'menu.category' | translate}} </a>
                        </li>-->

                    </ul>
                </li>


                <li><a><i class="fa fa-university" aria-hidden="true"></i> {{'menu.bank' | translate}} <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                        <li><a href="#!/bank"> {{'menu.bankList' | translate}} </a></li>
                        <li><a href="#!/bankLoan"> {{'menu.bankLoan' | translate}}</a></li>
                    </ul>
                </li>

                <li>
                    <a href="#!/model"><i class="fa fa-list-alt" aria-hidden="true"></i> {{'menu.model' | translate}}</a>
                </li>

            </ul>
        </div>


    </div>
    <!-- /sidebar menu -->

    <!-- /menu footer buttons -->
    <div class="sidebar-footer hidden-small">
        <a data-toggle="tooltip" data-placement="top" title="Settings">
            <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
        </a>
        <a data-toggle="tooltip" data-placement="top" title="FullScreen">
            <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
        </a>
        <a data-toggle="tooltip" data-placement="top" title="Lock">
            <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
        </a>
        <a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
            <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
        </a>
    </div>
    <!-- /menu footer buttons -->
</div>


