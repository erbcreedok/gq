<?php
if(!isset($_POST['email']))die("<a href='index.php'>403 - Forbidden</a>");

if(isset($_POST['company_name']) && $_POST['company_name']!="") $company_name = $_POST['company_name'];
else $company_name = "Не задан";

if(isset( $_POST['name']) && $_POST['name']!="")$name = $_POST['name'];
else $name = "Не задан";

if(isset($_POST['count']) && $_POST['count']!="")$count = $_POST['count'];
else $count = "Не задан";

if(isset( $_POST['phone']) && $_POST['phone']!="")$phone = $_POST['phone'];
else $phone = "Не задан";

if(isset($_POST['email']) && $_POST['email']!="")$email = $_POST['email'];
else $email = "Не задан";
?>
<?php include "chunk/head.php" ?>
<title>Потвердить заявление - Учебно-Экспертный Центр</title>
<input type="hidden" id="sitepage" value="verify">
<div class="wrapper">
    <div class="container">
        <div class="form_container form_container_min">
            <form id="acceptapplication" action="phpmailer.php" method="post">
                <input type="hidden" name="company_name" value="<?=$company_name?>">
                <input type="hidden" name="name" value="<?=$name?>">
                <input type="hidden" name="count" value="<?=$count?>">
                <input type="hidden" name="phone" value="<?=$phone?>">
                <input type="hidden" name="email" value="<?=$email?>">
                <div class="form_border top">
                    <p class="form_title">Отправить данную заявку?</p>
                </div>
                <div class="form_main">
                    <p><b>Название компании:</b> <?=$company_name?></p>
                    <p><b>Имя клиента:</b> <?=$name?></p>
                    <p><b>Кол-во человек на аттестацию:</b> <?=$count?></p>
                    <p><b>Контактный телефон:</b> <?=$phone?></p>
                    <p><b>Электронный адрес:</b> <?=$email?></p>
                </div>
                <div class="form_border bottom">
                    <button type="submit" name="submit" class="submit accept">ОТПРАВИТЬ</button>
                    <a href="index.php"><div class="submit decline">НАЗАД</div></a>
                    <div class="clear"></div>
                </div>
            </form>
        </div>
    </div>
</div>
