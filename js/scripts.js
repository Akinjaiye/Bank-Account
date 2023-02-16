












$(document).ready(function () {
  attachAccountListeners();
  $(".newAccForm").submit(function (event) {
    event.preventDefault();
    let name = $("#inputName").val();
    let deposit = parseInt($("#initialDeposit").val());
    if (deposit < 1000) {
      $("#balanceDisp").hide();
      $("#warn2").show();
    } else {
      $("#warn2").hide();
      let newAccount = new account(name, deposit);
      bank.addAccount(newAccount);
      $("#inputName").val("");
      $("#initialDeposit").val("");
      displayAccount(bank);
      showAccount(getSelectedAccount());
    }
  });


  $("#transactionForm").submit(function (event) {
    event.preventDefault();
    let deposit = $("#newDeposit").val();
    let withdraw = $("#newWithdraw").val();
    $("#newDeposit").val("");
    $("#newWithdraw").val("");
    if (getSelectedAccount()) {
      if (deposit) {
        bank.findAccount(getSelectedAccount()).makeDeposit(deposit);
      }
      if (withdraw) {
        bank.findAccount(getSelectedAccount()).makeWithdrawl(withdraw);
      }
      showAccount(getSelectedAccount());
    }
  });
  $("#accSelect").change(function () {
    showAccount(getSelectedAccount());
  });
});
