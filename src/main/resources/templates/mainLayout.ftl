<!DOCTYPE html>
<html lang="en">

<#include "head.ftl"/>

<body class="nav-md">

<div class="container body">

    <div class="main_container">

        <div class="col-md-3 left_col">

            <ul class="app-logo">
                <li><a><i class="fa fa-btc"></i></a></li>
            </ul>

            <#include "left_nav.ftl"/>

        </div>

        <#include "top_nav.ftl"/>

        <!-- page content -->
        <div class="right_col" role="main">
            <div ui-view="content"></div>
        </div>

    </div>

</div>


</body>
</html>

