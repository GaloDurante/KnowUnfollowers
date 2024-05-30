import followers from './data/followers.json' assert { type: 'json' };
import following from './data/following.json' assert { type: 'json' };

const unfollowYou = following.relationships_following.filter((follower) => {
  const followed = followers.some(
    (person) =>
      person.string_list_data[0].value === follower.string_list_data[0].value,
  );
  return !followed;
});

console.log('List of unfollowed you:');
console.log(' ');
unfollowYou.map((follower) => {
  console.log(`
    username: ${follower.string_list_data[0].value}
    link: ${follower.string_list_data[0].href}
  `);
});
