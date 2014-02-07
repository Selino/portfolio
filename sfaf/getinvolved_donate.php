<?php include('inc_header.php'); ?>
<?php include('inc_nav.php'); ?>
  <div class="wrapper-content">
  
  	<div class="donate-col1">
      <div class="donate-form shadow-div">
        <div class="form-header">
        <h2>Donate</h2>
        <div class="progress-bar">
        	<div class="progress-marker marker-on"></div>
            <div id="progress-state1" class="progress-on">Gift Information</div>
            <div id="progress-state2">Confirm Gift</div>
            <div id="progress-state3">Receipt</div>
        </div>
        <br />
        </div>
        <form id="donate">
        <hr />
        Fusce quis ante purus, vel hendrerit quam. Suspendisse sit amet nibh odio. Mauris condimentum, nisi vitae mollis posuere, nibh lectus sollicitudin sem, non luctus lorem purus eu massa. Vivamus condimentum, purus ut volutpat gravida, nibh augue sollicitudin nisi, a consequat sapien lectus sit amet ante.
        
        <h3>SELECT A GIFT AMOUNT</h3>       
        <input class="set-amount" name="amount" type="radio" value="25"><span class="amount">$25</span> - Buys condoms for the whole Castro for 10 min<br />
        <input class="set-amount" name="amount" type="radio" value="50"><span class="amount">$50</span> - Buys condoms for the whole Castro for an hour<br />
        <input class="set-amount" name="amount" type="radio" value="100"><span class="amount">$100</span> - Buys condoms for the whole Castro for a day<br />
        <input class="set-amount" name="amount" type="radio" value="250"><span class="amount">$250</span> - Buys condoms for the whole Castro for a week<br />
        <input id="other-amount" name="amount" type="radio" value="other">
        <input id="dollaramount" name="dollaramount" type="text"><span class="amount">other amount</span><br />
        <strong>
        Would you like to make a monthly donation?
        <input name="monthly" type="radio" id="monthly_checkbox_on" value="y" />Yes
        <input name="monthly" type="radio" id="monthly_checkbox_off" value="n" checked />No
        </strong>
        
        <div id="monthly_donation">
        For how many months?
        <select id="donation_months" name="donation_months">
          <option value="2" selected>2 months</option>
          <option value="6">6 months</option>
          <option value="12">12 months</option>
        </select>
        <hr />
        Total contribution: <span id="monthstotal"></span>
        </div>
        
        <h3>PERSONAL INFORMATION</h3>
       <!-- <label for="amount">Amount</label><input name="amount" type="text"> <input name="singlepayment" value="singlepayment" type="radio"><label for="singlepayment">Single Payment</label>
        <select name="monthlypayment">
          <option value="" selected>Monthly Payment</option>
          <option value="10">$10</option>
          <option value="20">$20</option>
        </select><br />-->
        
        <label for="name_first">First Name</label><input name="name_first" type="text"> <label for="name_last">Last Name</label><input name="name_first" type="text"><br />
        <label for="email">Email</label><input name="email" type="text">
        <input name="kit" value="kit" type="radio"><label class="wide" for="kit">Keep up to date with the latest news issues and announcements.</label><br />
        <span class="memory"><input name="memory" type="checkbox" id="memory-checkbox" value=""><label class="wide" for="memory">Check if you'd like to make a donation in memory of, or in honor of someone?</label></span>
        
        <div id="inmemory">
          <strong><input name="memoryof" value="memoryof" type="radio">
          <label class="wide" for="memoryof">IN MEMORY OF</label>
          <input name="memoryof" value="honorof" type="radio">
          <label class="wide" for="honorof">IN HONOR OF</label></strong>
          <div class="submemory">
            <label for="mem_name_first">First Name</label><input name="mem_name_first" type="text"> <label for="mem_name_last">Last Name</label><input name="mem_name_first" type="text"><br />
          	<span class="notify_text1">I'd like to notify someone of this donation</span><br />
            <label for="notify_name_first">First Name</label><input name="notify_name_first" type="text"> <label for="notifyname_last">Last Name</label><input name="notify_name_first" type="text"><br />
            <label for="notify_address">Address</label><input name="notify_address" type="text" size="81"><br />
            <label for="notify_city">City</label><input name="notify_city" type="text">
            <label for="notify_state">State</label><input name="notify_state" type="text" size="2">
            <label for="notify_zip">Zip</label><input name="notify_zip" type="text" size="5">
          </div>
        </div>
        
        <h3>PAYMENT INFORMATION</h3>
        <label for="cardnumber">Card Number</label><input name="cardnumber" type="text">
        <select name="cardtype">
          <option value="" selected>Card Type</option>
          <option value="mc">Master Card</option>
          <option value="visa">Visa</option>
        </select>
        <label for="expiration">Expiration</label><input name="expiration" type="text" size="5"><br />
        
        <label for="baddress">Billing Address</label><input name="baddress" type="text" size="81"><br />
        <label for="city">City</label><input name="city" type="text">
        <label for="state">State</label><input name="state" type="text" size="2">
        <label for="zip">Zip</label><input name="zip" type="text" size="5">
        
        <hr />
        <input class="submit" name="submit" type="submit" value="Next"><span class="fineprint">Your credit card will not be charged until you confirm your information in the next step.</span>
        </form>
      </div>
    </div>
    
    <div class="donate-col2">   
      <div class="side-section shadow-div moneygo">
        <ul>
          <li class="header"><h3>Where does the money go?</h3></li>
        </ul>
        <img src="/sfaf/images/various/donate_chart.png" vspace="10" width="243" height="164" alt="chart">
        <p>Fusce quis ante purus, vel hendrerit quam. Suspendisse sit amet nibh odio. Mauris condimentum, nisi vitae mollis posuere.</p>
      </div>
      <div class="side-section shadow-div">
        <ul>
          <li class="header"><h3>Other Ways to Give</h3></li>
          <li class="item waystogive">Mauris aliquet</li>
          <li class="item waystogive">Lorem ipsum dolor sit amet</li>
          <li class="item waystogive">Consectetur adipiscing elit</li>
        </ul>
      </div>
    </div>
    
  </div>
<?php include('inc_footer.php'); ?>
<div id="sectionID" class="getinvolved" alt="donation-programs"></div>
<script type="text/javascript" src="/sfaf/js/getinvolved_donate.js"></script>

