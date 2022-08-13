<form action="https://submit-form.com/pRfx2v0b">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" placeholder="Name" required="required" />
    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="Email" required="required" />
    <label for="message">Message</label>
    <textarea id="message" name="message" placeholder="Message" required="required"></textarea>
    <input
    type="checkbox"
    name="attach"
    style="display:none"
    tabindex="-1"
    autocomplete="off"
    />
    <input
    type="hidden"
    name="_redirect"
    value="https://franciskafieh.com/form-submitted"
  />
    <input type="hidden" name="_error" value="https://test.com/error" />
    <input type="hidden" name="_append" value="false" />
    <button type="submit" on:click={alert("your email has been sent!")}>Send</button>
</form>



<style>

</style>