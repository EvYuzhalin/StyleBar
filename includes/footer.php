
<?
    if (!$_COOKIE['CookiePolicyAccepted']) {
        ?>
            <div class="cookie">
                <div class="cookie__wrapper">
                    <p>Продолжая использовать наш сайт, вы принимаете <a href="/pages/policy/cookie/" target="_blank">политику использования cookie-файлов.</a></p>
                </div>
                <div class="cookie__btn" onclick="acceptCookiePolicy();">Принимаю</div>
                <p title="Не принимаю" class="cookie__close" onclick="closeCookiePolicyNotification();">X</p>
            </div>

            <script>
                function acceptCookiePolicy() {
                    setCookie("CookiePolicyAccepted", true);
                    $('.cookie').fadeTo(500, 0);
                    setTimeout(() => {
                        $('.cookie').hide();
                    }, 500);
                }
                function closeCookiePolicyNotification() {
                    $('.cookie').fadeOut(300);
                }
            </script>
        <?
    }
?>

</body>
</html>
<script src="/js/libs/jquery-3.5.1.min.js"></script>
<script src="/js/libs/slick.min.js"></script>
<script src="/js/libs/jquery.fancybox.min.js"></script>
<script src="/js/scripts.js"></script>
<script src="/js/cookie.js"></script>