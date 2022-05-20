<template>
  <div>
    <div>
      <img :src="$auth.user.picture">
    </div>
    <h1></h1>
    <h2>Info:</h2>
    <table class="table justify-content-center">
      <tbody>
        <tr>
          <td>Username:</td>
          <td>{{ $auth.user.nickname }}</td>
        </tr>
        <tr>
          <td>Email:</td>
          <td>{{ $auth.user.email }}</td>
        </tr>
        <tr>
          <td>Verified:</td>
          <td v-if="$auth.user.email_verified"> Yes</td>
          <td v-else>No</td>
        </tr>
        <tr>
          <td>Last enter: </td>
          <td>{{ $auth.user.updated_at }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>